
import React from 'react';

/**
 * Displays a comments not found message
 */
const NoCommentsFound = () => (
  <div className="columns is-centered">
    <div className="column comment-block is-one-third">
      <div className="card">
        <div className="card-content">
          No comments added yet
        </div>
      </div>
    </div>
  </div>
);

export default NoCommentsFound;
