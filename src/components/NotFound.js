import React from 'react';
import PropTypes from 'prop-types';

/**
 * Display a not found message
 */
const NotFound = (props) => {
  const { subtitle } = props;

  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns is-centered">
          <div className="card column is-half">
            <div className="card-content ">
              <p className="title">Sorry :(</p>
              <p className="subtitle">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NotFound.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default NotFound;
