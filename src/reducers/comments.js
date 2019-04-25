import {
  FETCH_POST_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  VOTE_COMMENT,
  REMOVE_COMMENT,
} from '../actions/types';
import { sortList } from '../utils/shared';

const comments = (state = null, action) => {
  switch (action.type) {
    case FETCH_POST_COMMENTS:
      return { ...sortList(action.comments, { field: 'timestamp', order: 'Descending' }) };
    case ADD_COMMENT: {
      const commentList = {
        ...state,
        [action.details.id]: {
          ...action.details,
        },
      };
      return { ...sortList(commentList, { field: 'timestamp', order: 'Descending' }) };
    }
    case EDIT_COMMENT:
    case VOTE_COMMENT:
      return {
        ...state,
        [action.details.id]: {
          ...action.details,
        },
      };
    case REMOVE_COMMENT: {
      const commentList = Object.assign({}, state);
      delete commentList[action.details.id];
      return commentList;
    }
    default:
      return state;
  }
};

export default comments;
