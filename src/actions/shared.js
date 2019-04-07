import { getInitialData } from '../utils/api';
import { fetchPosts } from './posts';

export const handleInitialData = () => (dispatch) => {
  getInitialData().then(({ posts }) => {
    // saving data received into the store. Dispatch receives an action
    // and is handled by the reducer
    dispatch(fetchPosts(posts));
  });
};
