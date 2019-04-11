import { FETCH_POSTS, FETCH_POST, VOTE_POST } from './types';
import { getPosts, getPostsByCategory, getPostDetails, postUpdateVote } from '../utils/api';

const fetchPosts = posts => ({
  type: FETCH_POSTS,
  posts,
});

const fetchPost = details => ({
  type: FETCH_POST,
  details,
});

const votePost = details => ({
  type: VOTE_POST,
  details,
});

const receivePostDetails = id => dispatch => getPostDetails(id)
  .then((details) => {
    dispatch(fetchPost(details));
  });

const receivePosts = () => (dispatch) => {
  dispatch(fetchPosts());
  getPosts().then((posts) => {
    dispatch(fetchPosts(posts));
  });
};

const receivePostsByCategory = category => (dispatch) => {
  dispatch(fetchPosts());
  getPostsByCategory(category).then((posts) => {
    dispatch(fetchPosts(posts));
  });
};

const fetchVotePost = (id, option) => dispatch => {
  postUpdateVote(id, option).then((details) => {
    dispatch(votePost(details));
  });
}

export {
  receivePostDetails,
  receivePosts,
  receivePostsByCategory,
  fetchVotePost,
};
