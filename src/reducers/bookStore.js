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
  case 'BOOKLIST_SUCCEEDED': {
    return {
      ...state,
      books: action.payload,
      selectedBook: action.payload[0],
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
