import {
  FETCH_POSTS,
  FETCH_POST,
  VOTE_POST,
  REMOVE_POST,
  EDIT_POST,
} from '../actions/types';
import { organizeById } from '../utils/shared';

export default function posts(state = null, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.posts ? { ...state, list: { ...organizeById(action.posts) } } : null;
    case FETCH_POST:
      return {
        ...state,
        activePost: {
          [action.details.id]: {
            ...action.details,
          },
        },
      };
    case EDIT_POST:
    case VOTE_POST:
      return {
        ...state,
        list: {
          ...state.list,
          [action.details.id]: {
            ...action.details,
          },
        },
        activePost: {
          [action.details.id]: {
            ...action.details,
          },
        },
      };
    case REMOVE_POST: {
      const newState = { ...state };
      
      delete newState.list[action.details.id];
      
      return newState;
    }
    default:
      return state;
  }
}
