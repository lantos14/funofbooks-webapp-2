import React from 'react';
import reactDOM from 'react-dom';
import { StylesProvider } from '@material-ui/styles';
import configureStore, { history } from './store/configureStore';

import Root from './containers/Root';

import './styles/main.scss';

// initialize store
const store = configureStore();

console.log('NODE_ENV: ', process.env.NODE_ENV);

reactDOM.render(
  <StylesProvider injectFirst>
    <Root store={store} history={history} />
  </StylesProvider>,
  document.getElementById('app'),
);

module.hot.accept();
