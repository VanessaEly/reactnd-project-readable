import React, { Component } from 'react'
import { connect } from 'react-redux';
import { receivePostDetails } from '../actions/posts';

class PostDetails extends Component {
  componentDidMount() {
    this.props.getPostDetails(this.props.match.params.post_id);
    // this.props.getComments(this.props.match.params.postId);
  }
  render() {
    return (
      <div className="hero-body">
        PostDetails
      </div>
    )
  }
}
const mapStateToProps = ({ posts }) => {
  let props = {};
  if (posts) {
    props.post = posts[Object.keys(posts)[0]];
  }
  return props;
};

const mapDispatchToProps = dispatch => ({
  getPostDetails: (id) => {
    dispatch(receivePostDetails(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);