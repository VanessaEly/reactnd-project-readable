import { FETCH_CATEGORIES } from './types';
import { getCategories } from '../utils/api';

export const fetchCategories = categories => ({
  type: FETCH_CATEGORIES,
  categories: categories.categories,
});

export const receiveCategories = () => (dispatch) => {
  getCategories().then((categories) => {
    dispatch(fetchCategories(categories));
  });
};
