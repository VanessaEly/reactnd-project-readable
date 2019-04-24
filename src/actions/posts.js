import {
  FETCH_POSTS,
  FETCH_POST,
  SORT_POSTS,
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

const fetchPosts = (posts, sort) => ({
  type: FETCH_POSTS,
  posts,
  sort,
});

const fetchPost = details => ({
  type: FETCH_POST,
  details,
});

const sortPosts = (posts, sort) => ({
  type: SORT_POSTS,
  posts,
  sort
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

const receivePosts = (sort) => (dispatch) => {
  dispatch(fetchPosts());
  getPosts().then((posts) => {
    dispatch(fetchPosts(posts, sort));
  });
};

const receivePostsByCategory = (category, sort) => (dispatch) => {
  dispatch(fetchPosts());
  getPostsByCategory(category).then((posts) => {
    dispatch(fetchPosts(posts, sort));
  });
};

const handleSortPosts = (posts, sort) => (dispatch) => {
  dispatch(sortPosts(posts, sort));
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
  handleSortPosts,
  fetchVotePost,
  handleAddPost,
  handleRemovePost,
  handleEditPost,
};
