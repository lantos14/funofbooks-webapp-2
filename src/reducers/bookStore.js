/* eslint-disable no-underscore-dangle */
import {
  BOOKLIST_REQUESTED,
  BOOK_SELECT_REQUESTED,
  BOOKLIST_SUCCEEDED,
} from '../actions/actionTypes';

export default function bookStore(state = {
  books: [],
  selectedBook: {
    title: '',
    story: '',
    opinion: '',
    summary: '',
  },
  loading: false,
}, action) {
  switch (action.type) {
  case BOOKLIST_SUCCEEDED: {
    return {
      ...state,
      books: action.payload,
      selectedBook: action.payload[0],
      loading: false,
    };
  }
  case BOOKLIST_REQUESTED: {
    return {
      ...state,
      loading: true,
    };
  }

  case BOOK_SELECT_REQUESTED: {
    return {
      ...state,
      selectedBook: state.books.find(book => book._id === action.payload),
    };
  }

  default:
    return state;
  }
}
