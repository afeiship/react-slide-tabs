import './dev.scss';
import ReactTabs from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-tabs">
        <ReactTabs>
          <div cssClass="bd" menu="red">
            Read tab contet...
          </div>
          <div cssClass="bd" menu="blue">
            Blue tab contet...
          </div>
          <div cssClass="bd" menu="yellow">
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
