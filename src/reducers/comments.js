import {
  FETCH_POST_COMMENTS,
  EDIT_COMMENT,
  VOTE_COMMENT,
  REMOVE_COMMENT,
} from '../actions/types';
import { organizeByKey } from '../utils/shared';

const comments = (state = null, action) => {
  switch (action.type) {
    case FETCH_POST_COMMENTS:
      return { ...organizeByKey('id', action.comments) };
    case EDIT_COMMENT:
    case VOTE_COMMENT:
      return {
        ...state,
        [action.details.id]: {
          ...action.details,
        },
      };
    case REMOVE_COMMENT: {
      const comments = Object.assign({}, state);
      delete comments[action.details.id];
      return comments
    }
    default:
      return state;
  }
}

export default comments;