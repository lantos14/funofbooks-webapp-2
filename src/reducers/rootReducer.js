import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import bookStore from './bookStore';

export default history => combineReducers({
  router: connectRouter(history),
  bookStore,
});
