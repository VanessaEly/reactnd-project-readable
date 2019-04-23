import React from 'react';

/**
 * @constructor NotFound
 * @description Display a not found message
 */
const NotFound = (props) => (
  <div className="hero-body">
    <div className="container has-text-centered">
      <div className="columns is-centered">
        <div className="card column is-half">
          <div className="card-content ">
            <p className="title">Sorry :(</p>
            <p className="subtitle">{props.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
