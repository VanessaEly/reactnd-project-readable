import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleDeletePost } from '../../actions/posts';

/**
 * @constructor PostMenuOptions
 * @description Creates the application PostMenuOptions
 */
class PostMenuOptions extends Component {
  triggerDeletePost = () => {
    const { id, deletePost } = this.props;
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(id);
    }
  }

  render() {
    const { toggleEditMode } = this.props;
    return (
      <div className="card-header-icon">
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <span className="icon">
              <i className="fas fa-ellipsis-v" aria-hidden="true" />
            </span>
          </div>
          <div className="dropdown-menu" id="dropdown-menu4" role="menu">
            <div className="dropdown-content">
              <div
                className="dropdown-item"
                onClick={() => toggleEditMode()}
                role="presentation"
              >
                <p>Edit</p>
              </div>
              <div
                className="dropdown-item"
                onClick={() => this.triggerDeletePost()}
              >
                <p>Delete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostMenuOptions.propTypes = {
  id: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  deletePost: (id) => {
    dispatch(handleDeletePost(id));
  },
});

export default connect(null, mapDispatchToProps)(PostMenuOptions);
