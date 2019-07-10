import {
  LOGIN_SUCCEEDED,
} from '../actions/actionTypes';

export default function user(state = {
  login: false,
  username: '',
}, action) {
  switch (action.type) {
  case LOGIN_SUCCEEDED: {
    return {
      ...state,
      login: true,
      username: action.payload.username,
    };
  }
  default:
    return state;
  }
}
