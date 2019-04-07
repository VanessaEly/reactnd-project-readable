import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
// import { loadingBarMiddleware } from 'react-redux-loading-bar'
import logger from './logger';

// since the handleInitialData() action creator in src/actions/shared.js returns a function,
// we'll need to install the react-thunk package
export default applyMiddleware(thunk, logger); // adding middlewares
// export default applyMiddleware(thunk, loadingBarMiddleware(), logger); // adding middlewares
