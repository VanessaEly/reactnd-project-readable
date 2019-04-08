import { FETCH_CATEGORIES } from './types';
import { getCategories } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const fetchCategories = categories => ({
  type: FETCH_CATEGORIES,
  categories,
});

export const receiveCategories = () => {
  return dispatch => {
    dispatch(showLoading());
    getCategories().then(categories => {
      dispatch(fetchCategories(categories));
      dispatch(hideLoading());
    });
  }
}