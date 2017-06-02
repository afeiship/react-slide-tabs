import './dev.scss';

import ReactTabs from './main';

class App extends React.Component{
  render(){
    return (
      <div className="hello-react-tabs">
        <ReactTabs>
          <div className="bd" menu="red">
            Read tab contet...
          </div>
          <div className="bd" menu="blue">
            Blue tab contet...
          </div>
          <div className="bd" menu="yellow">
            Yellow tab contet...
          </div>
        </ReactTabs>
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
