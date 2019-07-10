import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import bookStore from './bookStore';
import user from './user';

export default history => combineReducers({
  router: connectRouter(history),
  bookStore,
  user,
});
