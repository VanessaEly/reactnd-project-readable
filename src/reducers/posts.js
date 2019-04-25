import {
  FETCH_POSTS,
  FETCH_POST,
  SORT_POSTS,
  VOTE_POST,
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
} from '../actions/types';
import { sortList } from '../utils/shared';

const posts = (state = null, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.posts ? { ...state, ...sortList(action.posts, action.sort) } : null;
    case SORT_POSTS:
      return { ...sortList(action.posts, action.sort) };
    case FETCH_POST:
      return action.details.id ? {
        ...state,
        [action.details.id]: {
          ...action.details,
        },
      } : null;
    case ADD_POST:
    case EDIT_POST:
    case VOTE_POST:
      return {
        ...state,
        [action.details.id]: {
          ...action.details,
        },
      };
    case REMOVE_POST: {
      const postList = Object.assign({}, state);
      delete postList[action.details.id];
      return postList;
    }
    default:
      return state;
  }
};

export default posts;
