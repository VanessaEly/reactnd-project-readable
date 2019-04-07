import { FETCH_POSTS } from './types';

export const fetchPosts = (posts) => {
  return {
    type: FETCH_POSTS,
    posts,
  };
};