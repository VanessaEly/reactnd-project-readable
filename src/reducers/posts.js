import { FETCH_POSTS, FETCH_POST, VOTE_POST } from '../actions/types';
import { organizeById } from '../utils/shared';

export default function posts(state = null, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.posts ? { ...state, list: {...organizeById(action.posts)}} : null;
    case FETCH_POST:
      return {
        ...state,
        activePost: {
          [action.details.id]: {
            ...action.details,
          },
        },
      };
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
    default:
      return state;
  }
}
