import { FETCH_POSTS, FETCH_POST } from '../actions/types';

export default function posts(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // returning the current state merged with the posts of our action
      return { ...state, ...action.posts };
    case FETCH_POST:
      const { details } = action;
      return {
        ...state,
        posts: {
          [details.id]: {
            ...details
          },
        }
      };
    default:
      return state;
  }
}
