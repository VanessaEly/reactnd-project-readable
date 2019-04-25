import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PostHeader from './PostHeader';
import CardBody from '../card/CardBody';
import CardFooter from '../card/CardFooter';
import {
  handleEditPost,
  handleRemovePost,
  fetchVotePost,
} from '../../actions/posts';

/**
 * Displays a single post and handles post updates
 */
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      titleInput: '',
    };
  }

  /**
   * Handles changes on the editMode title input
   * @param {Object} e - Event that triggered this function
   */
  handleTitleChange = (e) => {
    this.setState({ titleInput: e.target.value });
  }

  /**
   * Triggered by the 'save' button.
   * Checks if title and body fields are filled and handles post saves.
   * @param {string} body - content of the edited post message
   */
  handleSavePost = (body) => {
    const { id, savePost } = this.props;
    const { titleInput } = this.state;
    if (titleInput.trim().length > 0 && body.trim().length > 0) {
      savePost(id, { title: titleInput, body });
      this.toggleEditMode();
    }
  }

  /**
   * Function triggered by the card menu 'delete' option.
   * Asks if the user is sure, and then removes the post.
   */
  handleDeletePost = () => {
    const { id, deletePost } = this.props;
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(id);
    }
  }

  /**
   * Toggles the post edit mode and clears all inputs
   */
  toggleEditMode = () => {
    const { title } = this.props;
    this.setState(({ isEditMode }) => ({
      isEditMode: !isEditMode,
      titleInput: title,
    }));
  }

  render() {
    const { isEditMode, titleInput } = this.state;
    const {
      id,
      body,
      category,
      updateVotePost,
    } = this.props;

    return (
      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <div className="card">
            <PostHeader
              isEditMode={isEditMode}
              toggleEditMode={this.toggleEditMode}
              handleTitleChange={this.handleTitleChange}
              titleInput={titleInput}
              handleDeletePost={this.handleDeletePost}
              {...this.props}
            />
            <div className="card-content">
              {!isEditMode
                ? <Link to={`/${category}/${id}`}>{body}</Link>
                : (
                  <CardBody
                    body={body}
                    handleSave={this.handleSavePost}
                    toggleEditMode={this.toggleEditMode}
                  />
                )
              }
            </div>
            <CardFooter updateVote={updateVotePost} {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  savePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  updateVotePost: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  savePost: (id, details) => {
    dispatch(handleEditPost(id, details));
  },
  deletePost: (id) => {
    dispatch(handleRemovePost(id));
  },
  updateVotePost: (id, option, doubleVote) => {
    dispatch(fetchVotePost(id, option, doubleVote));
  },
});

export default connect(null, mapDispatchToProps)(Post);
