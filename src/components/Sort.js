import React from 'react';
import PropTypes from 'prop-types';
import PostSort from './post/PostSort';

/**
 * Displays the sort card and calls its dropdowns
 */
const Sort = (props) => {
  const { currentSort, sortChange } = props;

  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <div className="card">
          <header className="card-header">
            <div className="media card-header-title is-centered">Sort</div>
          </header>
          <div className="card-content">
            <PostSort
              currentSort={currentSort}
              sortChange={sortChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Sort.propTypes = {
  currentSort: PropTypes.shape({
    field: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
  }).isRequired,
  sortChange: PropTypes.func.isRequired,
};

export default Sort;
