import { FETCH_POSTS, FETCH_POST } from './types';
import { getPosts, getPostsByCategory, getPostDetails } from '../utils/api';

const fetchPosts = posts => ({
  type: FETCH_POSTS,
  posts,
});

const fetchPost = details => ({
  type: FETCH_POST,
  details,
});

const receivePostDetails = id => dispatch => getPostDetails(id)
  .then((details) => {
    dispatch(fetchPost(details));
  });

const receivePosts = () => (dispatch) => {
  getPosts().then((posts) => {
    dispatch(fetchPosts(posts));
  });
};

const receivePostsByCategory = category => (dispatch) => {
  getPostsByCategory(category).then((posts) => {
    dispatch(fetchPosts(posts));
  });
};

export {
  receivePostDetails,
  receivePosts,
  receivePostsByCategory,
};
