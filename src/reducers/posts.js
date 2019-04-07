import { FETCH_POSTS } from '../actions/types';

export default function posts(state = {}, action) {
  switch(action.type) {
    case FETCH_POSTS :
      // returning the current state merged with the posts of our action
      return { ...state, ...action.posts };
    default :
      return state;
  };
};