import {
  FETCH_POST_COMMENTS,
  VOTE_COMMENT,
} from './types';
import {
  getPostComments,
  commentUpdateVote,
} from '../utils/api';

const fetchPostComments = comments => ({
  type: FETCH_POST_COMMENTS,
  comments,
});

const voteComment = details => ({
  type: VOTE_COMMENT,
  details,
});

const receivePostComments = id => dispatch =>
  getPostComments(id).then((comments) => {
    dispatch(fetchPostComments(comments));
  });

const fetchVoteComment = (id, option, numberOfVotes = 1) => (dispatch) => {
  commentUpdateVote(id, option).then((details) => {
    dispatch(voteComment(details));
    if (numberOfVotes === 2) {
      commentUpdateVote(id, option).then((secondDetails) => {
        dispatch(voteComment(secondDetails));
      });
    }
  });
};

export {
  receivePostComments,
  fetchVoteComment,
};
  