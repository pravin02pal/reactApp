import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Main from './src/common/main.component.jsx'
import Home from './src/common/home.component.jsx'
import SignUp from './src/sign-up/container/sign-up.container.jsx'
import Auth from './src/auth/container/auth.container.jsx'

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={Main}>
          <Route path="/" component={Home}/>
          <Route path="/signin" component={Auth}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/signout" component={Auth}/>
        </Route>
      </Router>
    );
  }
}

export default App;
