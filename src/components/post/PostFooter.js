import React from 'react';
import PropTypes from 'prop-types';

/**
 * @constructor PostFooter
 * @description Creates the footer part of the post component
 */
const PostFooter = (props) => {
  const { voteScore, commentCount } = props;
  return (
    <div className="card-footer media-content">
      <div className="thumbs-content card-header-icon">
        <span className="card-header-icon">
          <i className="fas fa-thumbs-up" />
        </span>
        {voteScore}
        <span className="card-header-icon">
          <i className="fas fa-thumbs-down" />
        </span>
      </div>
      <div className="card-header-icon media-right">
        <span className="icon">
          <i className="far fa-comment-alt" />
        </span>
        {`${commentCount} comments`}
      </div>
    </div>
  );
};

PostFooter.propTypes = {
  voteScore: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default PostFooter;
