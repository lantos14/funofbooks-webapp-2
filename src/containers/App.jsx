/* eslint-disable import/no-named-as-default */
import { Route, Switch } from 'react-router';
import React from 'react';
import { hot } from 'react-hot-loader';
import Main from './Main/Main';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

const App = () => (
  <div id="switch">
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </div>
);

export default hot(module)(App);
