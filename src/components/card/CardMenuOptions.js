import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @constructor CardMenuOptions
 * @description Creates the application CardMenuOptions
 */
class CardMenuOptions extends Component {
  render() {
    const { toggleEditMode, handleDelete } = this.props;
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
              <p>Edit</p>
            </div>
            <div
              className="dropdown-item"
              onClick={() => handleDelete()}
            >
              <p>Delete</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CardMenuOptions.propTypes = {
  id: PropTypes.string.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};


export default CardMenuOptions;
