import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

export default class Post extends Component {
  render() {
    const {
      // id,
      body,
    } = this.props;
    return (
      <div className="column is-half">
        <div className="card">
          <PostHeader {...this.props} />
          <div className="card-content">
            <p>{body}</p>
          </div>
          <PostFooter {...this.props} />
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  body: PropTypes.string.isRequired,
};
