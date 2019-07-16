import {
  BOOKLIST_REQUESTED,
  BOOK_SELECT_REQUESTED,
  REGISTRATION_REQUESTED,
  LOGIN_REQUESTED,
  NEW_BOOK_POST_REQUESTED,
} from './actionTypes';

export function getBooks() {
  return {
    type: BOOKLIST_REQUESTED,
  };
}

export function bookSelected(id) {
  return {
    type: BOOK_SELECT_REQUESTED,
    payload: id,
  };
}

export function loginRequested(email, pwd) {
  return {
    type: LOGIN_REQUESTED,
    payload: { email, pwd },
  };
}

export function registrationRequested(email, username, pwd) {
  return {
    type: REGISTRATION_REQUESTED,
    payload: { email, username, pwd },
  };
}

export function newBookPosting(myWisdom) {
  return {
    type: NEW_BOOK_POST_REQUESTED,
    payload: myWisdom,
  };
}
