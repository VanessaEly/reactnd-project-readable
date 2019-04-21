import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import { handleEditPost, handleDeletePost } from '../../actions/posts';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      titleInput: '',
      bodyInput: '',
    }
  }
  /**
   * Handles changes on the editMode body input
   */
  handleBodyChange = (e) => {
    this.setState({bodyInput: e.target.value});
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
  handleSavePost = () => {
    const { id, savePost } = this.props;
    const { titleInput, bodyInput } = this.state;
    savePost(id, { title: titleInput, body: bodyInput });
    this.toggleEditMode();
  }
  /**
   * Toggles the post edit mode and clears all inputs
   */
  toggleEditMode = () => {
    const { title, body } = this.props;
    this.setState(({ isEditMode }) => (
      { isEditMode: !isEditMode,
        titleInput: title,
        bodyInput: body
      }
    ));
  }
  triggerDeletePost = () => {
    const { id, deletePost } = this.props;
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(id);
    }
  }
  render() {
    const { isEditMode, bodyInput, titleInput } = this.state;
    const {
      id,
      body,
      category,
    } = this.props;
    return (
      <div className="column is-half">
        <div className="card">
          <PostHeader
            isEditMode={isEditMode}
            toggleEditMode={this.toggleEditMode}
            handleTitleChange={this.handleTitleChange}
            titleInput={titleInput}
            {...this.props} />
          <div className="card-content">
            {!isEditMode
              ? <Link to={`/${category}/${id}`}>{body}</Link>
              : (
                <div>
                  <input className="input" type="text" placeholder="Post content" value={bodyInput}
                  onChange={this.handleBodyChange}/>
                  {!bodyInput && <p className="help is-danger">Post body is required</p>}
                  <div className="buttons has-addons is-right">
                    <span className="button is-small" onClick={this.toggleEditMode}>Cancel</span>
                    <span className="button is-info is-small" onClick={this.handleSavePost}>Save</span>
                  </div>
                </div>
              )
            }
          </div>
          <PostFooter {...this.props} />
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
    dispatch(handleDeletePost(id));
  },
});

export default connect(null, mapDispatchToProps)(Post);