import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostSort extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    this.state = {
      sortFields: {
        'timestamp': 'Timestamp',
        'voteScore': 'Score',
        'title': 'Title',
        'author': 'Author',
        'commentCount': 'Number of Comments',
      },
      sortOrders: [ 'Ascending', 'Descending']
    }
  }
  render() {
    const { sortFields, sortOrders } = this.state;
    const { currentSort, sortChange } = this.props;

    return (
      <div className="columns is-centered">
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu">
              <span>{sortFields[currentSort.field]}</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              {Object.keys(sortFields).map(id => (
                <div
                  key={id}
                  className={`dropdown-item ${currentSort.field === id ? 'is-active' : ''}`}
                  onClick={() => sortChange('field', id)}
                >
                  {sortFields[id]}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu">
              <span>{currentSort.order}</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              {sortOrders.map(sort => (
                <div
                  key={sort}
                  className={`dropdown-item ${currentSort.order === sort ? 'is-active' : ''}`}
                  onClick={() => sortChange('order', sort)}
                >
                  {sort}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

PostSort.propTypes = {
  currentSort: PropTypes.shape({
    field: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
  }).isRequired,
  sortChange: PropTypes.func.isRequired,
};

export default PostSort;