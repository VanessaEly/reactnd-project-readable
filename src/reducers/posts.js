import {
  FETCH_POSTS,
  FETCH_POST,
  VOTE_POST,
  REMOVE_POST,
  EDIT_POST,
} from '../actions/types';
import { organizeByKey } from '../utils/shared';

const posts = (state = null, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.posts ? { ...state, ...organizeByKey('id', action.posts) } : null;
    case FETCH_POST:
      return {
        ...state,
        [action.details.id]: {
          ...action.details,
        },
      };
    case EDIT_POST:
    case VOTE_POST:
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
