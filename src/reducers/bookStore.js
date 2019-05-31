export default function bookStore(state = {
  books: [],
  selectedBook: '',
  loading: false,
}, action) {
  switch (action.type) {
  case 'BOOKLIST_SUCCEEDED': {
    return {
      ...state,
      books: action.payload,
      loading: false,
    };
  }
  case 'BOOKLIST_REQUESTED': {
    return {
      ...state,
      loading: true,
    };
  }

  default:
    return state;
  }
}
