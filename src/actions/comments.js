import {
  FETCH_POST_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  REMOVE_COMMENT,
  VOTE_COMMENT,
} from './types';
import {
  getPostComments,
  commentUpdateVote,
  updateComment,
  deleteComment,
  addComment,
} from '../utils/api';

import { receivePost } from './posts';

const fetchPostComments = comments => ({
  type: FETCH_POST_COMMENTS,
  comments,
});

const createComment = details => ({
  type: ADD_COMMENT,
  details,
});

const editComment = details => ({
  type: EDIT_COMMENT,
  details,
});

const removeComment = details => ({
  type: REMOVE_COMMENT,
  details,
});

const voteComment = details => ({
  type: VOTE_COMMENT,
  details,
});

const receivePostComments = id => dispatch => getPostComments(id)
  .then((comments) => {
    dispatch(fetchPostComments(comments));
  });

const handleAddComment = details => dispatch => addComment(details)
  .then((comment) => {
    dispatch(createComment(comment));
  }).then(() => {
    dispatch(receivePost(details.parentId));
  });

const handleEditComment = (id, details) => dispatch => updateComment(id, details)
  .then((comment) => {
    dispatch(editComment(comment));
  });

const handleDeleteComment = (id, parentId) => dispatch => deleteComment(id)
  .then((comment) => {
    dispatch(removeComment(comment));
  })
  .then(() => {
    dispatch(receivePost(parentId));
  });

const fetchVoteComment = (id, option, doubleVote = false) => (dispatch) => {
  commentUpdateVote(id, option).then((details) => {
    dispatch(voteComment(details));
    if (doubleVote) {
      commentUpdateVote(id, option).then((secondDetails) => {
        dispatch(voteComment(secondDetails));
      });
    }
  });
};

export {
  receivePostComments,
  handleAddComment,
  handleEditComment,
  handleDeleteComment,
  fetchVoteComment,
};
