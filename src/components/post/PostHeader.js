import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getInitials, timestampToDate } from '../../utils/shared';
import PostMenuOptions from './PostMenuOptions';

/**
 * @constructor PostHeader
 * @description Creates the header part of the post component
 */
const PostHeader = (props) => {
  const {
    id,
    title,
    titleInput,
    author,
    timestamp,
    category,
    toggleEditMode,
    isEditMode,
    handleTitleChange,
  } = props;

  return (
    <header className="card-header">
      <div className="media card-header-title">
        <div className="media-left">
          <div className="avatar-circle-sm">
            <span className="initials">{getInitials(author)}</span>
          </div>
        </div>
        <div className="media-content">
          {!isEditMode
            ? <Link to={`/${category}/${id}`}><p className="title is-6">{title}</p></Link>
            : (
              <div>
                <input
                  className="input"
                  type="text"
                  placeholder="Post content"
                  value={titleInput}
                  onChange={handleTitleChange}
                />
                {!titleInput && <p className="help is-danger">Post title is required</p>}
              </div>
            )
          }
          <p className="subtitle is-7">
            {`Posted by ${author} - ${timestampToDate(timestamp)}`}
          </p>
        </div>
      </div>
      <div className="card-header-icon">
        <span className="tag is-primary">{category}</span>
      </div>
      <PostMenuOptions toggleEditMode={toggleEditMode} id={id} />
    </header>
  );
};

PostHeader.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleInput: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
};

export default PostHeader;
