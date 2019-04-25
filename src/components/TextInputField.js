import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * Displays a text input field
 */
const TextInputField = (props) => (
  <Fragment>
    <div className="field is-horizontal">
      {props.withLabel 
        && <div className="field-label is-normal">
          <label className="label">{props.name}</label>
        </div>
      }
      <div className="field-body">
        <div className="field">
          <p className="control">
            <input
              className="input"
              type="text"
              name={props.name}
              placeholder={`Insert the ${props.name}`}
              value={props.value}
              onChange={props.handleChange}
            />
          </p>
          {props.value.trim().length === 0
            && <p className="help is-danger">{props.name} requires at least one character</p>
          }
        </div>
      </div>
    </div>
  </Fragment>
);

TextInputField.defaultProps = {
  withLabel: false,
}

TextInputField.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  withLabel: PropTypes.bool,
};

export default TextInputField;
