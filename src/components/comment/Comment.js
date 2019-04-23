import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostHeader from '../post/PostHeader';
import CardFooter from '../card/CardFooter';
// import { handleEditPost, handleDeletePost } from '../../actions/posts';
import { fetchVoteComment } from '../../actions/comments';

class Comment extends Component {
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
   * Handles the savePost method, which is triggered by the editMode 'save' button.
   */
  // handleSavePost = () => {
  //   const { id, savePost } = this.props;
  //   const { titleInput, bodyInput } = this.state;
  //   savePost(id, { title: titleInput, body: bodyInput });
  //   this.toggleEditMode();
  // }
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
  // triggerDeletePost = () => {
  //   const { id, deletePost } = this.props;
  //   if (window.confirm('Are you sure you want to delete this post?')) {
  //     deletePost(id);
  //   }
  // }
  render() {
    const { isEditMode, bodyInput, titleInput } = this.state;
    const {
      id,
      body,
      updateVoteComment,
    } = this.props;
    return (
      <div className="columns is-centered">
        <div className="column is-one-third">
          <div className="card">
            {/* <PostHeader
              isEditMode={isEditMode}
              toggleEditMode={this.toggleEditMode}
              handleTitleChange={this.handleTitleChange}
              titleInput={titleInput}
              {...this.props} /> */}
            <div className="card-content">
              {!isEditMode
                ? <div>{ body }</div>
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
            <CardFooter updateVote={updateVoteComment} {...this.props} />
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
  updateVoteComment: (id, option, numberOfVotes) => {
    dispatch(fetchVoteComment(id, option, numberOfVotes));
  },
});

export default connect(null, mapDispatchToProps)(Comment);