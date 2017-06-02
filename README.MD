# react-tabs
> Tabs component for react.


## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


## props:
```js
NONE
```

## usage:
```jsx
// import ReactTabs from 'react-tabs'

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
```
