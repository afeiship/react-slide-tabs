import './style.scss';
import classNames from 'classnames';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    activeIndex:React.PropTypes.number,
  };

  static defaultProps = {
    activeIndex:0
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex:props.activeIndex
    };
  }

  render(){
    return (
      <div className={classNames('react-tabs',this.props.cssClass)}>
        <ul className="react-tabs-menu">
          {React.Children.map(this.props.children, (element, index) => {
            return (<li key={index} className={classNames('react-tabs-menu-item',{'tab-active':this.state.activeIndex == index})} onClick={() => {this.setState({activeIndex: index})}}>{element.props.menu}</li>)
          })}
        </ul>
        
        <div className="react-tabs-content">
          <div className="react-tabs-content-scroller" style={{
              width:`${this.props.children.length*100}%`
            }}>
            {React.Children.map(this.props.children, (element, index) => {
              return (
                <div
                  key={index}
                  style={{
                     width:`${100/this.props.children.length}%`,
                     transform:`translateX(-${100*(this.state.activeIndex)}%)`
                  }}
                 className={classNames('react-tabs-content-item',{'tab-active':this.state.activeIndex == index})}>
                 {element.props.children}
               </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}
