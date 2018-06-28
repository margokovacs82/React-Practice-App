import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'containers/HomePage/Homepage';
import LoginPage from 'containers/LoginPage/Loginpage';

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route component={LoginPage} />
  </Switch>
);

export default hot(module)(App);
