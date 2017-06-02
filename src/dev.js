import './dev.scss';

import ReactSwipeTabs from './main';

class App extends React.PureComponent{
  render(){
    return (
      <div className="hello-react-swipe-tabs">
        <ReactSwipeTabs>
          <div className="bd" menu="red">
            Read tab contet...
          </div>
          <div className="bd" menu="blue">
            Blue tab contet...
          </div>
          <div className="bd" menu="yellow">
            Yellow tab contet...
          </div>
        </ReactSwipeTabs>
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
