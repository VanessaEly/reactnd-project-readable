import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

export default class Post extends Component {
  render() {
    const {
      id,
      body,
      category,
    } = this.props;
    return (
      <div className="column is-half">
        <div className="card">
          <Link to={`/${category}/${id}`}>
            <PostHeader {...this.props} />
            <div className="card-content">
              <p>{body}</p>
            </div>
          </Link>
          <PostFooter {...this.props} />
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
