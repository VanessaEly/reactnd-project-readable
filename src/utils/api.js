export const API = 'http://localhost:3001';

// getting access token from our localStorage and, if not found, creating a new one
let { token } = localStorage;

// adding tok
if (!token) {
  localStorage.token = Math.random().toString(36).substr(-8);
  ({ token } = localStorage);
}

// setting our request headers
export const headers = {
  Accept: 'application/json',
  Authorization: token,
  'Content-Type': 'application/json',
};

/**
 * Function used to get all posts from our API server
 * @return {Promise} - a promise that resolves the required posts data
 */
const getPosts = () => fetch(`${API}/posts`, { headers })
  .then(res => res.json())
  .then(data => data);

/**
 * Getting our app initial data.
 * @return {Promise} - Returns the response of a promise.all request, which resolves the data
 * of all of our initial promises
 */
export function getInitialData() {
  return Promise.all([
    getPosts(),
  ]).then(([posts]) => ({
    posts,
  }));
}
