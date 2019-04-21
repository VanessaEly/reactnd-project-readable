import React from 'react';
import PropTypes from 'prop-types';
import PostVoteMenu from './PostVoteMenu';

/**
 * @constructor PostFooter
 * @description Creates the footer part of the post component
 */
const PostFooter = (props) => {
  const { id, voteScore, commentCount } = props;
  return (
    <div className="card-footer media-content">
      <PostVoteMenu id={id} voteScore={voteScore} />
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
  id: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default PostFooter;
