export default function bookStore(state = {
  Books: [],
  selectedBook: '',
  loading: false,
}, action) {
  switch (action.type) {
  case 'BOOKLIST_SUCCEEDED': {
    return {
      ...state,
      Books: action.payload,
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
