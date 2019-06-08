import {
  BOOKLIST_REQUESTED,
  BOOK_SELECT_REQUESTED,
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
