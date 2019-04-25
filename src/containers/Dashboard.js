import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { receivePosts, receivePostsByCategory, handleSortPosts } from '../actions/posts';
import Header from '../components/Header';
import Sort from '../components/Sort';
import NewPost from '../components/post/NewPost';
import Post from '../components/post/Post';
import Loading from '../components/Loading';
import NotFound from '../components/NotFound';

/**
 * Dashboard handles the post list pages, including the ones filtered by category
 */
class Dashboard extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    this.state = {
      currentSort: {
        field: 'timestamp',
        order: 'Descending',
      },
    };
  }

  componentDidMount() {
    // checking parameter that was passed to the category value,
    // and use it to get posts related to it
    const { match: { params: { category } } } = this.props;
    const { currentSort } = this.state;

    this.getPosts(category, currentSort);
  }

  // When an update occurs we'll check the category that is being used
  componentDidUpdate(prevProps) {
    const { params: { category: prevCategory } } = prevProps.match;
    const { match: { params: { category } } } = this.props;
    const { currentSort } = this.state;
    const categoryChanged = prevCategory !== category;
    if (categoryChanged) this.getPosts(category, currentSort);
  }

  /**
   * Method used to get posts based on the category that was passed to it
   * @param {String} category - The category that we currently are looking for.
   * @param {Object} sort - needs to have a field and an order ('Ascending' or 'Descending')
   * property. We get this sort object by selecting our sort dropdowns.
   */
  getPosts = (category, sort) => {
    const { getPostsByCategory, getAllPosts } = this.props;
    // if no category was passed, we get all posts
    if (category) getPostsByCategory(category, sort);
    else getAllPosts(sort);
  }

  /**
   * Updates the state currentSort property based on the sort options that were selected.
   * Also updates the current list sort order
   * @param {string} property - Sort property that is being updated, can be 'field' or 'order'
   * @param {string} value - Value that will be given to the changed property
   */
  updateSort = (property, value) => {
    const { posts, sortPosts } = this.props;
    let { currentSort } = this.state;
    // checking if sort value changed
    if (currentSort[property] !== value) {
      // updating state sort values
      this.setState(({
        currentSort: {
          ...currentSort,
          [property]: value,
        },
      }), () => {
        // when state is successfully changed, we sort the posts
        ({ currentSort } = this.state);
        sortPosts(posts, currentSort);
      });
    }
  }

  render() {
    const { posts, match } = this.props;
    const { currentSort } = this.state;

    return (
      <Fragment>
        <Header match={match} />
        <div className="hero-body">
          <div className="container is-fluid">
            <Sort currentSort={currentSort} sortChange={this.updateSort} />
            <NewPost />
            {posts && Object.keys(posts).length === 0
              && <NotFound subtitle="No posts were found for this category" />}
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
  sortPosts: PropTypes.func.isRequired,
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
  getPostsByCategory: (category, sort) => {
    dispatch(receivePostsByCategory(category, sort));
  },
  getAllPosts: (sort) => {
    dispatch(receivePosts(sort));
  },
  sortPosts: (posts, sort) => {
    dispatch(handleSortPosts(posts, sort));
  },
});

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
