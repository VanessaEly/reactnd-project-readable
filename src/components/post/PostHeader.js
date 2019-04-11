import React from 'react';
import PropTypes from 'prop-types';
import { timestampToDate } from '../../utils/shared';

/**
 * @constructor PostHeader
 * @description Creates the header part of the post component
 */
const PostHeader = (props) => {
  const {
    title,
    author,
    timestamp,
    category,
  } = props;
  return (
    <header className="card-header">
      <div className="media card-header-title">
        <div className="media-left">
          <div className="avatar-circle-sm">
            <span className="initials">JD</span>
          </div>
        </div>
        <div className="media-content">
          <p className="title is-6">{title}</p>
          <p className="subtitle is-7">
            {`Posted by ${author} - ${timestampToDate(timestamp)}`}
          </p>
        </div>
      </div>
      <div className="card-header-icon">
        <span className="tag is-primary">{category}</span>
      </div>
      <div className="card-header-icon">
        <span className="icon">
          <i className="fas fa-ellipsis-v" aria-hidden="true" />
        </span>
      </div>
    </header>
  );
};

PostHeader.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
};

export default PostHeader;
