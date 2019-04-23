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

// Category
const getCategories = () => fetch(`${API}/categories`, { headers })
  .then(res => res.json());

// Post
const getPosts = () => fetch(`${API}/posts`, { headers })
  .then(res => res.json());

const getPost = id => fetch(`${API}/posts/${id}`, { headers })
  .then(res => res.json());

const getPostsByCategory = category => fetch(`${API}/${category}/posts`, { headers })
  .then(res => res.json());

const addPost = (post) => fetch(`${API}/posts`, {
  method: 'POST',
  headers,
  body: JSON.stringify(post),
}).then(res => res.json());

const deletePost = id => fetch(`${API}/posts/${id}`, {
  method: 'DELETE',
  headers,
}).then(res => res.json());

const updatePost = (id, details) => fetch(`${API}/posts/${id}`, {
  method: 'PUT',
  headers,
  body: JSON.stringify(details),
}).then(res => res.json());

const postUpdateVote = (id, option) => fetch(`${API}/posts/${id}`, {
  method: 'POST',
  headers,
  body: JSON.stringify({ option }),
}).then(res => res.json());

// Comment
const getPostComments = (id) => fetch(`${API}/posts/${id}/comments`, { headers })
  .then(res => res.json())

const getComments = (id) => fetch(`${API}/comments/${id}`, { headers })
  .then(res => res.json())

const addComment = (comment) => fetch(`${API}/comments`, {
  method: 'POST',
  headers,
  body: JSON.stringify(comment),
}).then(res => res.json());

const deleteComment = (id) => fetch(`${API}/comments/${id}`, {
  method: 'DELETE',
  headers,
}).then(res => res.json());

const updateComment = (id, details) => fetch(`${API}/comments/${id}`, {
  method: 'PUT',
  headers,
  body: JSON.stringify(details),
}).then(res => res.json());

const commentUpdateVote = (id, option) => fetch(`${API}/comments/${id}`, {
  method: 'POST',
  headers,
  body: JSON.stringify({ option }),
}).then(res => res.json());

export {
  getCategories,
  getPosts,
  getPost,
  getPostsByCategory,
  addPost,
  deletePost,
  updatePost,
  postUpdateVote,
  getPostComments,
  getComments,
  addComment,
  deleteComment,
  updateComment,
  commentUpdateVote,
};
