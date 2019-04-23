import {
  FETCH_POSTS,
  FETCH_POST,
  VOTE_POST,
  REMOVE_POST,
  EDIT_POST,
} from './types';
import {
  getPosts,
  getPostsByCategory,
  getPost,
  postUpdateVote,
  deletePost,
  updatePost,
} from '../utils/api';

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

const removePost = details => ({
  type: REMOVE_POST,
  details,
});

const editPost = details => ({
  type: EDIT_POST,
  details,
});

const receivePost = id => dispatch => getPost(id)
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

const fetchVotePost = (id, option, numberOfVotes = 1) => (dispatch) => {
  postUpdateVote(id, option).then((details) => {
    dispatch(votePost(details));
    if (numberOfVotes === 2) {
      postUpdateVote(id, option).then((secondDetails) => {
        dispatch(votePost(secondDetails));
      });
    }
  });
};

const handleDeletePost = (id) => (dispatch) => {
  deletePost(id).then((post) => {
    dispatch(removePost(post));
  });
};

const handleEditPost = (id, details) => (dispatch) => {
  updatePost(id, details).then((post) => {
    dispatch(editPost(post));
  });
};

export {
  receivePost,
  receivePosts,
  receivePostsByCategory,
  fetchVotePost,
  handleDeletePost,
  handleEditPost,
};
