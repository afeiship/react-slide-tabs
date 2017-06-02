import './style.scss';
import {Children} from 'react';
import classNames from 'classnames';
import ReactSwipeable from 'react-swipeable';
import ReactSwipeableViews from 'react-swipeable-views';


export default class extends ReactSwipeableViews {

  constructor(props) {
    super(props);
    this._index = props.activeIndex;
    this._length = props.children.length;
    this._boundary = {
      min: 0,
      max: this._length - 1
    };
  }

  toIndex() {
    this.updateIndex();
    this.slide();
    this.syncState();
  }


  updateIndex() {
    if (this._index > this._boundary.max) {
      this._index = this._boundary.max;
    }

    if (this._index < this._boundary.min) {
      this._index = this._boundary.min;
    }
  }

  render() {
    const {children, className, unit, animate, duration, activeIndex, onNext, onPrev, ...props} = this.props;
    return (
      <div {...props} className={classNames('react-slide-tabs', className)}>
        <div className="hd">
          <ul className="react-slide-tabs-menu">
            {Children.map(children, (element, index) => {
              return (<li
                style={{width: `${100 / this._length}%`}}
                key={index}
                className={classNames('react-slide-tabs-menu-item', {'tab-active': this.state.activeIndex == index})}
                onClick={() => {
                  this.play(index);
                }}>{element.props.menu}</li>)
            })}
          </ul>
          <div
            style={{
              width: `${100 / this._length}%`,
              left: `${100 * this.state.activeIndex / this._length}%`
            }} className="bar"></div>
        </div>
        <ReactSwipeable
          className="bd"
          onSwipingLeft={this.onSwipingNext.bind(this)}
          onSwipingRight={this.onSwipingPrev.bind(this)}
          onSwipedLeft={this.next.bind(this)}
          onSwipedRight={this.prev.bind(this)}
          style={{
            width: `${this.state.bound.width}px`
          }}
        >
          <div className="react-slide-tabs-content" ref="root">
            <div className="react-slide-tabs-content-scroller" style={{
              width: `${this._length * 100}%`,
              transition: `transform ${this.state.duration}s ${this.state.animate}`,
              WebkitTransition: `transform ${this.state.duration}s ${this.state.animate}`,
              transform: `translate(${this.state.translate},0)`,
              WebkitTransform: `translate(${this.state.translate},0)`
            }}>
              {Children.map(children, (element, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      width: `${100 / this._length}%`
                    }}
                    className={classNames('react-slide-tabs-content-item', {'tab-active': this.state.activeIndex == index})}>
                    {element.props.children}
                  </div>
                )
              })}
            </div>
          </div>
        </ReactSwipeable>
      </div>
    );
  }
}
