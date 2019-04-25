import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * Displays a text input field
 */
const TextInputField = (props) => {
  const {
    withLabel,
    name,
    value,
    handleChange,
  } = props;

  return (
    <Fragment>
      <div className="field is-horizontal">
        {withLabel && (
          <div className="field-label is-normal">
            <span className="label">{name}</span>
          </div>
        )}
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input
                id={name}
                className="input"
                type="text"
                name={name}
                placeholder={`Insert the ${name}`}
                value={value}
                onChange={handleChange}
              />
            </p>
            {value.trim().length === 0
              && <p className="help is-danger">{`${name} requires at least one character`}</p>
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
};

TextInputField.defaultProps = {
  withLabel: false,
};

TextInputField.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  withLabel: PropTypes.bool,
};

export default TextInputField;
