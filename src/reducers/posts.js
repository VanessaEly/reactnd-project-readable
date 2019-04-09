import { FETCH_POSTS, FETCH_POST } from '../actions/types';

export default function posts(state = null, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...action.posts };
    case FETCH_POST:
      return {
        ...state,
        posts: {
          [action.details.id]: {
            ...action.details,
          },
        },
      };
    default:
      return state;
  }
}
