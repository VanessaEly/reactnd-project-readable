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

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      titleInput: '',
    }
  }
  /**
   * Handles changes on the editMode title input
   */
  handleTitleChange = (e) => {
    this.setState({titleInput: e.target.value});
  }
  /**
   * Handles the savePost method, which is triggered by the editMode 'save' button.
   */
  handleSavePost = (body) => {
    const { id, savePost } = this.props;
    const { titleInput } = this.state;
    if (titleInput.trim().length > 0 && body.trim().length > 0) {
      savePost(id, { title: titleInput, body });
      this.toggleEditMode();
    }
  }
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
    this.setState(({ isEditMode }) => (
      { isEditMode: !isEditMode,
        titleInput: title
      }
    ));
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
      <div className="column is-half">
        <div className="card">
          <PostHeader
            isEditMode={isEditMode}
            toggleEditMode={this.toggleEditMode}
            handleTitleChange={this.handleTitleChange}
            titleInput={titleInput}
            handleDeletePost={this.handleDeletePost}
            {...this.props} />
          <div className="card-content">
            {!isEditMode
              ? <Link to={`/${category}/${id}`}>{body}</Link>
              : <CardBody body={body} handleSave={this.handleSavePost} toggleEditMode={this.toggleEditMode} />
            }
          </div>
          <CardFooter updateVote={updateVotePost} {...this.props} />
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
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