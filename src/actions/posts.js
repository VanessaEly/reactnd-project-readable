import {
  FETCH_POSTS,
  FETCH_POST,
  VOTE_POST,
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
} from './types';
import {
  getPosts,
  getPostsByCategory,
  getPost,
  postUpdateVote,
  addPost,
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

const createPost = details => ({
  type: ADD_POST,
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

const fetchVotePost = (id, option, doubleVote = false) => (dispatch) => {
  postUpdateVote(id, option).then((details) => {
    dispatch(votePost(details));
    if (doubleVote) {
      postUpdateVote(id, option).then((secondDetails) => {
        dispatch(votePost(secondDetails));
      });
    }
  });
};
const handleAddPost = details => dispatch =>
  addPost(details).then((post) => {
    console.log('details', details)
    dispatch(createPost(post));
  });

const handleRemovePost = (id) => (dispatch) => {
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
  handleAddPost,
  handleRemovePost,
  handleEditPost,
};
