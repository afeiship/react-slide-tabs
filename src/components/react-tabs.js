import './style.scss';
import classNames from 'classnames';
import Swipeable from 'react-swipeable';
import {ReactSwipeViews} from 'react-swipe-views';

export default class extends ReactSwipeViews{

  constructor(props) {
    super(props);

    this._length = props.children.length;
    this._boundary = {
      min: 0,
      max: this._length - 1
    };
  }

  render(){
    return (
      <div className={classNames('react-tabs',this.props.cssClass)}>
        <div className="hd">
          <ul className="react-tabs-menu">
            {React.Children.map(this.props.children, (element, index) => {
              return (<li
                style={{width:`${100/this._length}%`}}
                key={index}
                className={classNames('react-tabs-menu-item',{'tab-active':this.state.activeIndex == index})}
                onClick={() => {this.play(index);}}>{element.props.menu}</li>)
            })}
          </ul>
          <div
            style={{
              width:`${100/this._length}%`,
              left:`${100*this.state.activeIndex/this._length}%`
            }} className="bar"></div>
        </div>
        <Swipeable
          className="bd"
          onSwipingLeft={this.onSwipingNext.bind(this)}
          onSwipingRight={this.onSwipingPrev.bind(this)}
          onSwipedLeft={this.next.bind(this)}
          onSwipedRight={this.prev.bind(this)}
          style={{
            width:`${this.state.bound.width}px`
          }}
          >
          <div className="react-tabs-content" ref="root">
            <div className="react-tabs-content-scroller" style={{
                  width:`${this._length*100}%`,
                  transition:`transform ${this.state.duration}s ${this.state.animate}`,
                  WebkitTransition:`transform ${this.state.duration}s ${this.state.animate}`,
                  transform:`translate(${this.state.translate},0)`,
                  WebkitTransform:`translate(${this.state.translate},0)`
                }}>
              {React.Children.map(this.props.children, (element, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      width:`${100/this._length}%`
                    }}
                   className={classNames('react-tabs-content-item',{'tab-active':this.state.activeIndex == index})}>
                   {element.props.children}
                 </div>
                )
              })}
            </div>
          </div>
        </Swipeable>
      </div>
    );
  }
}
