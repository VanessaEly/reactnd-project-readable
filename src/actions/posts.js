import { FETCH_POSTS, FETCH_POST } from './types';
import { getPosts, getPostsByCategory, getPostDetails } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const fetchPosts = posts => ({
  type: FETCH_POSTS,
  posts,
});

const fetchPost = details => ({
  type: FETCH_POST,
  details,
});

const receivePostDetails = id => dispatch =>
  getPostDetails(id)
    .then((details) => {
      dispatch(fetchPost(details));
    });

const receivePosts = () => {
  return dispatch => {
    dispatch(showLoading());
    getPosts().then(posts => {
      dispatch(fetchPosts(posts));
      dispatch(hideLoading());
    });
  }
}

const receivePostsByCategory = (category) => {
  return dispatch => {
    dispatch(showLoading());
    getPostsByCategory(category).then(posts => {
      dispatch(fetchPosts(posts));
      dispatch(hideLoading());
    });
  }
}

export {
  receivePostDetails,
  receivePosts,
  receivePostsByCategory,
}