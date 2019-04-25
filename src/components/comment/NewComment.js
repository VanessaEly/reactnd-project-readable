import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardBody from '../card/CardBody';
import { handleAddComment } from '../../actions/comments';
import UserAvatar from '../UserAvatar';
import TextInputField from '../TextInputField';
import { generateId } from '../../utils/shared';

/**
 * Displays and handles a new comment form
 */
class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      author: '',
    };
  }

  /**
   * Triggered by the 'save' button.
   * Checks if body and author are filled and handles comment saves.
   * @param {string} body - content of the new comment
   */
  handleSaveComment = (body) => {
    const { addComment, parentId } = this.props;
    const { author } = this.state;

    if (author.trim().length > 0 && body.trim().length > 0) {
      const newPost = {
        id: generateId(),
        timestamp: Date.now(),
        body,
        author,
        parentId,
      };
      addComment(newPost);
      this.toggleEditMode();
    }
  }

  /**
   * Toggles the comment edit mode and clears all inputs
   * @param {bool} mode - boolean, if passed, sets the edit mode to the value that was passed, else,
   * just sets the edit mode as the opposite as it was before.
   */
  toggleEditMode = (mode) => {
    this.setState(({ isEditMode }) => ({
      isEditMode: mode || !isEditMode,
      author: '',
    }));
  }

  /**
   * Handles changes on the inputs.
   */
  handleChange = (e) => {
    this.setState({ [e.target.name.toLowerCase()]: e.target.value });
  }

  render() {
    const { isEditMode, author } = this.state;

    return (
      <div className="columns is-centered">
        <div className="column comment-block is-half">
          <div className="card">
            <span
              className="card-header pointer"
              onClick={() => this.toggleEditMode(true)}
              role="presentation"
            >
              <div className="media card-header-title">
                <UserAvatar author={author} />
                <p>Add a new comment</p>
              </div>
            </span>
            {isEditMode
              && (
                <div className="card-content comment-content">
                  <TextInputField
                    name="Author"
                    withLabel
                    value={author}
                    handleChange={this.handleChange}
                  />
                  <CardBody
                    handleSave={this.handleSaveComment}
                    toggleEditMode={this.toggleEditMode}
                  />
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

NewComment.propTypes = {
  parentId: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addComment: (details) => {
    dispatch(handleAddComment(details));
  },
});

export default connect(null, mapDispatchToProps)(NewComment);
