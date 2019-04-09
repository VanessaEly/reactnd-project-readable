import { combineReducers } from 'redux';
import posts from './posts';
import categories from './categories';

// combining all app reducers
export default combineReducers({ posts, categories });
