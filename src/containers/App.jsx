import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Main from './Main/Main';
import Admin from './Admin/Admin';

const App = () => (
  <Switch>
    <Redirect exact from="/" to="/main" />
    <Route path="/main" component={Main} />
    <Route path="/admin" component={Admin} />
  </Switch>
);

export default App;
