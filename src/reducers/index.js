import { combineReducers } from 'redux';
import posts from './posts';
import categories from './categories';
import { loadingBarReducer } from 'react-redux-loading-bar';

// combining all app reducers
export default combineReducers({ posts, categories, loadingBar: loadingBarReducer, });
