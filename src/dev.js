import './dev.scss';
import ReactTabs from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-tabs">
        <ReactTabs />
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
