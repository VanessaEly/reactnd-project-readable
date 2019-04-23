import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { receivePosts, receivePostsByCategory } from '../actions/posts';
import Header from '../components/Header';
import NewPost from '../components/post/NewPost';
import Post from '../components/post/Post';
import Loading from '../components/Loading';
import NotFound from '../components/NotFound';

class Dashboard extends Component {
  componentDidMount() {
    // checking parameter that was passed to the category value,
    // and use it to get posts related to it
    const { match: { params: { category } } } = this.props;
    this.getPosts(category);
  }

  // When an update occurs we'll check the category that is being used
  componentDidUpdate(prevProps) {
    const { params: { category: prevCategory } } = prevProps.match;
    const { match: { params: { category } } } = this.props;
    const categoryChanged = prevCategory !== category;
    if (categoryChanged) this.getPosts(category);
  }

  /**
   * Method used to get posts based on the category that was passed to it
   * @param {String} category - The category that we currently are looking for.
   */
  getPosts(category) {
    const { getPostsByCategory, getAllPosts } = this.props;
    // if no category was passed, we get all posts
    if (category) getPostsByCategory(category);
    else getAllPosts();
  }

  render() {
    const { posts, match } = this.props;
    return (
      <Fragment>
        <Header match={match}/>
        <div className="hero-body">
          <div className="container is-fluid">
            <NewPost />
            {posts && Object.keys(posts).length === 0
              && <NotFound subtitle={'No posts were found for this category'}/>}
            {!posts || posts.length
              ? <Loading />
              : Object.keys(posts).map(id => <Post key={id} {...posts[id]} />)}
          </div>
        </div>
      </Fragment>
    );
  }
}

Dashboard.defaultProps = {
  posts: null,
};

Dashboard.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  getPostsByCategory: PropTypes.func.isRequired,
  posts: PropTypes.shape({}),
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  getPostsByCategory: (category) => {
    dispatch(receivePostsByCategory(category));
  },
  getAllPosts: () => {
    dispatch(receivePosts());
  },
});

const mapStateToProps = ({ posts }) => ({
  posts
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
