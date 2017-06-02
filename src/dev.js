import './dev.scss';

import ReactSlideTabs from './main';

class App extends React.PureComponent{
  render(){
    return (
      <div className="hello-react-slide-tabs">
        <ReactSlideTabs>
          <div className="bd" menu="red">
            Read tab contet...
          </div>
          <div className="bd" menu="blue">
            Blue tab contet...
          </div>
          <div className="bd" menu="yellow">
            Yellow tab contet...
          </div>
        </ReactSlideTabs>
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
