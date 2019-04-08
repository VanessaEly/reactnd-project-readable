const API = 'http://localhost:3001';

// getting access token from our localStorage and, if not found, creating a new one
let { token } = localStorage;

// adding token
if (!token) {
  localStorage.token = Math.random().toString(36).substr(-8);
  ({ token } = localStorage);
}

// setting our request headers
const headers = {
  Accept: 'application/json',
  Authorization: token,
  'Content-Type': 'application/json',
};

const getPostDetails = (id) => fetch(`${API}/posts/${id}`, { headers })
  .then(res => res.json())
  .then(data => data);

const getPosts = () => fetch(`${API}/posts`, { headers })
  .then(res => res.json())
  .then(data => data);

const getCategories = () => fetch(`${API}/categories`, { headers })
  .then(res => res.json())
  .then(data => data);

const getPostsByCategory = (category) => fetch(`${API}/${category}/posts`, { headers })
.then(res => res.json())
.then(data => data);

export {
  getPostDetails,
  getPosts,
  getCategories,
  getPostsByCategory,
};