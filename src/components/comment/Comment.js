import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardBody from '../card/CardBody';
import CardFooter from '../card/CardFooter';
import { handleEditComment, handleDeleteComment, fetchVoteComment } from '../../actions/comments';
import CardMenuOptions from '../card/CardMenuOptions';
import { timestampToDate } from '../../utils/shared';
import UserAvatar from '../UserAvatar';

/**
 * Displays a single comment and handles comment updates
 */
class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
    };
  }

  /**
   * Function triggered by the 'save' button.
   * Checks if body content was filled, and then submits the save.
   * @param {string} body - content of the body (comment message) that is being saved
   */
  handleSaveComment = (body) => {
    const { id, saveComment } = this.props;
    if (body.trim().length > 0) {
      saveComment(id, { edited: Date.now(), body });
      this.toggleEditMode();
    }
  }

  /**
   * Function triggered by the card menu 'delete' option.
   * Asks if the user is sure, and then removes the comment.
   */
  handleRemoveComment = () => {
    const { id, parentId, deleteComment } = this.props;
    if (window.confirm('Are you sure you want to delete this comment?')) {
      deleteComment(id, parentId);
    }
  }

  /**
   * Toggles the comment edit mode and clears all inputs
   */
  toggleEditMode = () => {
    this.setState(({ isEditMode }) => ({ isEditMode: !isEditMode }));
  }

  render() {
    const { isEditMode } = this.state;
    const {
      id,
      body,
      author,
      timestamp,
      updateVoteComment,
    } = this.props;

    return (
      <div className="columns is-centered">
        <div className="column comment-block is-half">
          <div className="card">
            <div className="card-content comment-content">
              <article className="media">
                <UserAvatar author={author} />
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{author}</strong>
                      <small>{` - ${timestampToDate(timestamp)}`}</small>
                    </p>
                    {!isEditMode
                      ? <p>{ body }</p>
                      : (
                        <CardBody
                          body={body}
                          handleSave={this.handleSaveComment}
                          toggleEditMode={this.toggleEditMode}
                        />
                      )
                    }
                  </div>
                  <CardFooter updateVote={updateVoteComment} {...this.props} />
                </div>
                <div className="media-right">
                  <CardMenuOptions
                    handleDelete={this.handleRemoveComment}
                    toggleEditMode={this.toggleEditMode}
                    id={id}
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  parentId: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  updateVoteComment: PropTypes.func.isRequired,
  saveComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updateVoteComment: (id, option, doubleVote) => {
    dispatch(fetchVoteComment(id, option, doubleVote));
  },
  saveComment: (id, details) => {
    dispatch(handleEditComment(id, details));
  },
  deleteComment: (id, parentId) => {
    dispatch(handleDeleteComment(id, parentId));
  },
});

export default connect(null, mapDispatchToProps)(Comment);
