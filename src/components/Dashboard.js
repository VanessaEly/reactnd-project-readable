import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { receivePosts, receivePostsByCategory } from '../actions/posts';

class Dashboard extends Component {
  componentDidMount() {
    const { match: { params: { category } } } = this.props;
    if (category) this.props.getPostsByCategory(category);
    else this.props.getPosts();
  }
  render() {
    const { posts } = this.props;
    console.log(' current posts' , posts)
    return (
      <Fragment>
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">
              Title
            </p>
            <p className="subtitle">
              Subtitle
            </p>
          </div>
        </div>
      </Fragment>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  getPostsByCategory: (category) => {
    dispatch(receivePostsByCategory(category));
  },
  getPosts: () => {
    dispatch(receivePosts());
  },
});

const mapStateToProps = ({ posts }) => {
  if (posts) return { posts };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);