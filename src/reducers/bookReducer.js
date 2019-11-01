import uuid from 'uuid/v1';

export default function bookReducer(state, action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, {
        author: action.book.author,
        id: uuid(),
        title: action.book.title
      }];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
}
