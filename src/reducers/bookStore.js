export default function bookStore(state = {
  books: [],
  selectedBook: {
    title: 'title',
    story: 'story',
    opinion: 'opinion',
    summary: 'summary',
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
