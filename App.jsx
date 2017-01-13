import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Main from './src/common/main.component.jsx'
import Home from './src/common/home.component.jsx'

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
        </Route>
    </Router>
    );
  }
}

export default App;