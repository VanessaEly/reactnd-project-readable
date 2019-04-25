import React from 'react';
import PropTypes from 'prop-types';

/**
 * Creates the application CardMenuOptions, which has buttons to edit or cancel,
 * using functions passed as props to handle those methods. This allows this component to be
 * user both by posts and comments
 */
const CardMenuOptions = (props) => {
  const { toggleEditMode, handleDelete } = props;

  return (
    <div className="dropdown is-hoverable">
      <div className="dropdown-trigger">
        <span className="icon">
          <i className="fas fa-ellipsis-v" aria-hidden="true" />
        </span>
      </div>
      <div className="dropdown-menu" id="dropdown-menu4" role="menu">
        <div className="dropdown-content">
          <div
            className="dropdown-item"
            onClick={() => toggleEditMode()}
            role="presentation"
          >
            Edit
          </div>
          <div
            className="dropdown-item"
            onClick={() => handleDelete()}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
}

CardMenuOptions.propTypes = {
  id: PropTypes.string.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};


export default CardMenuOptions;
