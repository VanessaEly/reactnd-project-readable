import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receivePost } from '../actions/posts';
import { receivePostComments } from '../actions/comments';
import Header from '../components/Header';
import Post from '../components/post/Post';
import NotFound from '../components/NotFound';
import Comment from '../components/comment/Comment';
import NewComment from '../components/comment/NewComment';

/**
 * Displays the page that contains details about a post, including its comment list
 */
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
    const { post, comments, match } = this.props;
    const commentKeys = comments ? Object.keys(comments) : null;

    return (
      <Fragment>
        <Header match={match} />
        <div className="hero-body">
          <div className="container is-fluid">
            {post
              ? (
                <Fragment>
                  <Post key={post.id} {...post} />
                  <NewComment parentId={post.id} />
                </Fragment>
              )
              : <NotFound subtitle="404 - The requested post was not found" />
            }
            { post && comments && commentKeys.length > 0
              && commentKeys.map(id => (
                !comments[id].parentDeleted && <Comment key={id} {...comments[id]} />
              ))
            }
          </div>
        </div>
      </Fragment>
    );
  }
}

PostDetails.propTypes = {
  post: PropTypes.shape({}),
  comments: PropTypes.shape({}),
  getPostDetails: PropTypes.func.isRequired,
  getPostComments: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      post_id: PropTypes.string,
    }),
  }),
};

PostDetails.defaultProps = {
  post: null,
  comments: null,
  match: null,
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
