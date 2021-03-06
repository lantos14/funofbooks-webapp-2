import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
// eslint-disable-next-line import/no-extraneous-dependencies
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/sagas';

export const history = createBrowserHistory();

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    reduxImmutableStateInvariant(),
    sagaMiddleware,
    routerMiddleware(history),
  ];

  // eslint-disable-next-line no-underscore-dangle, max-len
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
