import React from 'react';

/**
 * @constructor PostsNotFound
 * @description Displays a post not found message when there are no posts to display
 */
const PostsNotFound = () => (
  <div className="hero-body">
    <div className="container has-text-centered">
      <div className="columns is-centered">
        <div className="card column is-half">
          <div className="card-content ">
            <p className="title">Sorry :(</p>
            <p className="subtitle">No posts found</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PostsNotFound;
