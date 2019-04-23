import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receivePost } from '../actions/posts';
import { receivePostComments } from '../actions/comments';
import Post from '../components/post/Post';
import Comment from '../components/comment/Comment';
import PostsNotFound from '../components/post/PostsNotFound';

class PostDetails extends Component {
  componentDidMount() {
    const {
      getPostDetails,
      getPostComments,
      match: { params: { post_id: id } },
    } = this.props;
    getPostDetails(id);
    getPostComments(id);
  }

  render() {
    const { post, comments } = this.props;
    const commentKeys = comments ? Object.keys(comments) : null;

    return (
      <div className="hero-body">
        <div className="container is-fluid">
          <div className="columns is-centered">
            {post
              ? <Post key={post.id} {...post} />
              : <PostsNotFound />
            }
          </div>
          { comments && commentKeys.length > 0
            ? commentKeys.map(id => (!comments[id].parentDeleted && <Comment key={id} {...comments[id]} />
              ))
            : <div>No comments found</div>
          }
        </div>
      </div>
    );
  }
}

PostDetails.propTypes = {
  post: PropTypes.shape({}),
  getPostDetails: PropTypes.func,
  getPostComments: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      post_id: PropTypes.string,
    }),
  }),
};

PostDetails.defaultProps = {
  post: null,
};

const mapStateToProps = ({ posts, comments }, props) => {
  const { match: { params: { post_id: id } } } = props;
  const list = {};
  if (posts) list.post = posts[id];
  if (comments) list.comments = comments;

  return list;
};

const mapDispatchToProps = dispatch => ({
  getPostDetails: (id) => {
    dispatch(receivePost(id));
  },
  getPostComments: (id) => {
    dispatch(receivePostComments(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
