import './style.scss';
import classNames from 'classnames';
import Swipeable from 'react-swipeable';
import Measure from 'react-measure';


export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    activeIndex:React.PropTypes.number,
    duration:React.PropTypes.number,
  };

  static defaultProps = {
    activeIndex:0,
    duration:0.3
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex:props.activeIndex,
      dimensions:{},
      translateX:0,
      duration:props.duration
    };
  }

  _onSwipedLeft(ev){
    var index = this.state.activeIndex + 1;
    var length = this.props.children.length;
    if(index==length){
      return this.toIndex(this.state.activeIndex);
    }
    this.toIndex(index);
  }

  _onSwipedRight(ev){
    var index = this.state.activeIndex - 1;
    if(index<0){
      return this.toIndex(this.state.activeIndex);
    }
    this.toIndex(index);
  }

  toIndex(inIndex){
    this.setState({
      activeIndex:inIndex,
      duration:this.props.duration,
      translateX:`-${inIndex * 100/ this.props.children.length}%`
    });
  }


  _onSwipingLeft(ev,deltaX){
    var _translateX = this.state.activeIndex * this.state.dimensions.width;
    this.setState({
      duration:0,
      translateX:`-${_translateX+deltaX}px`
    });

  }

  _onSwipingRight(ev,deltaX){
    var _translateX = this.state.activeIndex * this.state.dimensions.width;
    this.setState({
      duration:0,
      translateX: `${-_translateX+deltaX}px`
    });
  }

  render(){
    return (
      <div className={classNames('react-tabs',this.props.cssClass)}>
        <div className="hd">
          <ul className="react-tabs-menu">
            {React.Children.map(this.props.children, (element, index) => {
              return (<li
                style={{width:`${100/this.props.children.length}%`}}
                key={index}
                className={classNames('react-tabs-menu-item',{'tab-active':this.state.activeIndex == index})}
                onClick={() => {this.toIndex(index);}}>{element.props.menu}</li>)
            })}
          </ul>
          <div
            style={{
              width:`${100/this.props.children.length}%`,
              left:`${100*this.state.activeIndex/this.props.children.length}%`
            }} className="bar"></div>
        </div>
        <Measure onMeasure={(dimensions) => {
          this.setState({dimensions})
        }}>
        <Swipeable
          className="bd"
          onSwipedLeft={this._onSwipedLeft.bind(this)}
          onSwipedRight={this._onSwipedRight.bind(this)}
          onSwipingLeft={this._onSwipingLeft.bind(this)}
          onSwipingRight={this._onSwipingRight.bind(this)}
          >
          <div className="react-tabs-content">
            <div className="react-tabs-content-scroller" style={{
                width:`${this.props.children.length*100}%`,
                transition:`transform ${this.state.duration}s`,
                transform:`translateX(${this.state.translateX})`
              }}>
              {React.Children.map(this.props.children, (element, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      width:`${100/this.props.children.length}%`
                    }}
                   className={classNames('react-tabs-content-item',{'tab-active':this.state.activeIndex == index})}>
                   {element.props.children}
                 </div>
                )
              })}
            </div>
          </div>
        </Swipeable>
        </Measure>
      </div>
    );
  }
}
