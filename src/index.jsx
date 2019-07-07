import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { StylesProvider } from '@material-ui/styles';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/configureStore';
import './styles/main.scss';
import Main from './containers/Main/Main';
import Admin from './containers/Admin/Admin';

// initialize store
const store = configureStore();

reactDOM.render(
  <StylesProvider injectFirst>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Redirect exact from="/" to="/main" />
          <Route path="/main" component={Main} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </StylesProvider>,
  document.getElementById('app'),
);

module.hot.accept();
