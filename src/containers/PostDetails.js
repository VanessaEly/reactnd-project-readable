import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receivePostDetails } from '../actions/posts';
import Post from '../components/post/Post';
import PostsNotFound from '../components/post/PostsNotFound';

class PostDetails extends Component {
  componentDidMount() {
    const { getPostDetails, match: { params: { post_id: id } } } = this.props;
    getPostDetails(id);
  }

  render() {
    const { post, match: { params: { post_id: activePost } } } = this.props;
    return (
      <div className="hero-body">
        <div className="container is-fluid">
          <div className="columns is-centered">
            {post && post[activePost]
              ? <Post key={post[activePost].id} {...post[activePost]} />
              : <PostsNotFound />
            }
          </div>
        </div>
      </div>
    );
  }
}

PostDetails.propTypes = {
  post: PropTypes.shape({}),
  getPostDetails: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      post_id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

PostDetails.defaultProps = {
  post: {},
};

const mapStateToProps = ({ posts }) => {
  const props = {};
  if (posts) {
    props.post = posts.activePost;
  }
  return props;
};

const mapDispatchToProps = dispatch => ({
  getPostDetails: (id) => {
    dispatch(receivePostDetails(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
