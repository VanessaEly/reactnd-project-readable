import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receivePostDetails } from '../actions/posts';

class PostDetails extends Component {
  componentDidMount() {
    const { getPostDetails, match: { params: { post_id: id } } } = this.props;
    getPostDetails(id);
  }

  render() {
    return (
      <div className="hero-body">PostDetails</div>
    );
  }
}

PostDetails.propTypes = {
  getPostDetails: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      post_id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = ({ posts }) => {
  const props = {};
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
