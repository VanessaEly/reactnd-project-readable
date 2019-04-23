import {
  FETCH_POSTS,
  FETCH_POST,
  VOTE_POST,
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
} from '../actions/types';
import { organizeByKey } from '../utils/shared';

const posts = (state = null, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.posts ? { ...state, ...organizeByKey('id', action.posts) } : null;
    case FETCH_POST:
      return action.details.id ? {
        ...state,
        [action.details.id]: {
          ...action.details,
        },
      } : null ;
    case ADD_POST:
    case EDIT_POST:
    case VOTE_POST:
    console.log('action', action)
    console.log(action.details)
      return {
        ...state,
        [action.details.id]: {
          ...action.details,
        },
      };
    case REMOVE_POST: {
      const posts = Object.assign({}, state);
      delete posts[action.details.id];
      return posts
    }
    default:
      return state;
  }
}

export default posts;
