import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardBody from '../card/CardBody';
import CardFooter from '../card/CardFooter';
import { handleEditComment, handleDeleteComment } from '../../actions/comments';
import { fetchVoteComment } from '../../actions/comments';
import CardMenuOptions from '../card/CardMenuOptions';
import { timestampToDate } from '../../utils/shared';
import UserAvatar from '../UserAvatar';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
    }
  }
  /**
   * Handles the savePost method, which is triggered by the editMode 'save' button.
   */
  handleSaveComment = (body) => {
    const { id, saveComment } = this.props;
    if (body.trim().length > 0) {
      saveComment(id, { edited: Date.now(), body });
      this.toggleEditMode();
    }
  }
  /**
   * Toggles the post edit mode and clears all inputs
   */
  toggleEditMode = () => {
    this.setState(({ isEditMode }) => ({ isEditMode: !isEditMode }));
  }
  handleRemoveComment = () => {
    const { id, parentId, deleteComment } = this.props;
    if (window.confirm('Are you sure you want to delete this comment?')) {
      deleteComment(id, parentId);
    }
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
        <div className="column comment-block is-one-third">
          <div className="card">
            <div className="card-content comment-content">
              <article className="media">
                <UserAvatar author={author}/>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{author}</strong>
                      <small>{` - ${timestampToDate(timestamp)}`}</small>
                    </p>
                    {!isEditMode
                        ? <p>{ body }</p>
                        : <CardBody
                          body={body}
                          handleSave={this.handleSaveComment}
                          toggleEditMode={this.toggleEditMode}
                        />
                      }
                  </div>
                  <CardFooter updateVote={updateVoteComment} {...this.props} />
                </div>
                <div className="media-right">
                  <CardMenuOptions handleDelete={this.handleRemoveComment} toggleEditMode={this.toggleEditMode} id={id} />
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
  body: PropTypes.string.isRequired,
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