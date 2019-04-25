import { FETCH_CATEGORIES } from '../actions/types';

export default function categories(state = null, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      // returning the current state merged with the categories of our action
      return { ...state, ...action.categories };
    default:
      return state;
  }
}
