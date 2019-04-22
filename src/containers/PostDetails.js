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
    const { post } = this.props;
    return (
      <div className="hero-body">
        <div className="container is-fluid">
          <div className="columns is-centered">
            {post
              ? <Post key={post.id} {...post} />
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
  getPostDetails: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      post_id: PropTypes.string,
    }),
  }),
};

PostDetails.defaultProps = {
  post: null,
};

const mapStateToProps = ({posts}, props) => {
  const { match: { params: { post_id: id } } } = props;
  const list = {};
  if (posts) {
    list.post = posts[id]
  }
  
  return list;
};

const mapDispatchToProps = dispatch => ({
  getPostDetails: (id) => {
    dispatch(receivePostDetails(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
