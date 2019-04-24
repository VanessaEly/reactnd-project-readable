import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardBody from '../card/CardBody';
import { handleAddComment } from '../../actions/comments';
import UserAvatar from '../UserAvatar';
import TextInputField from '../TextInputField';
import { generateId } from '../../utils/shared';

class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      author: '',
    }
  }
  /**
   * Handles the savePost method, which is triggered by the editMode 'save' button.
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
   * Toggles the post edit mode and clears all inputs
   */
  toggleEditMode = (mode) => {
    this.setState(({ isEditMode }) => ({
      isEditMode: mode ? mode : !isEditMode,
      author: '',
    }));
  }
  /**
   * Handles changes on the inputs
   */
  handleChange = (e) => {
    this.setState({[e.target.name.toLowerCase()]: e.target.value});
  }
  render() {
    const { isEditMode, author } = this.state;
    return (
      <div className="columns is-centered">
        <div className="column comment-block is-one-third">
          <div className="card">
            <header className="card-header" onClick={() => this.toggleEditMode(true)}>
              <div className="media card-header-title">
                <UserAvatar author={author}/>
                <p>Add a new comment</p>
              </div>
            </header>
            {isEditMode
              && <div className="card-content comment-content">
              <TextInputField name='Author' withLabel={true} value={author} handleChange={this.handleChange} />
              <CardBody
                handleSave={this.handleSaveComment}
                toggleEditMode={this.toggleEditMode}
              />
            </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

NewComment.propTypes = {
  parentId: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addComment: (details) => {
    dispatch(handleAddComment(details));
  },
});

export default connect(null, mapDispatchToProps)(NewComment);