import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { timestampToDate } from '../../utils/shared';
import CardMenuOptions from '../card/CardMenuOptions';
import UserAvatar from '../UserAvatar';

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
    handleDeletePost,
  } = props;
  return (
    <header className="card-header">
      <div className="media card-header-title">
        <UserAvatar author={author}/>
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
                {titleInput.trim().length === 0
                  && <p className="help is-danger">Title requires at least one character</p>
                }
              </div>
            )
          }
          <p className="subtitle is-7">
            {`Posted by ${author} - ${timestampToDate(timestamp)}`}
          </p>
        </div>
      </div>
      <div className="card-header-icon no-pointer">
        <span className="tag is-primary">{category}</span>
      </div>
      <div className="card-header-icon">
        <CardMenuOptions handleDelete={handleDeletePost} toggleEditMode={toggleEditMode} id={id} />
      </div>
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
