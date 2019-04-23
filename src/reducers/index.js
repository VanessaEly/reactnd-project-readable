import { combineReducers } from 'redux';
import posts from './posts';
import categories from './categories';
import comments from './comments';

// combining all app reducers
export default combineReducers({ posts, categories, comments });
