import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInputField from '../TextInputField';

/**
 * Creates the body part of cards
 */
class CardBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyInput: '',
    };
  }

  componentWillMount() {
    const { body } = this.props;

    this.setState(() => ({
      bodyInput: body,
    }));
  }

  /**
   * Handles changes on the body input
   * @param {Object} e - event that triggered this function
   */

  handleBodyChange = (e) => {
    this.setState({ bodyInput: e.target.value });
  }

  render() {
    const { bodyInput } = this.state;
    const { handleSave, toggleEditMode, withLabel } = this.props;

    return (
      <div className="content">
        <TextInputField
          name="Message"
          withLabel={withLabel}
          value={bodyInput}
          handleChange={this.handleBodyChange}
        />
        <div className="buttons has-addons is-right">
          <span className="button is-small" onClick={() => toggleEditMode()} role="presentation">
            {'Cancel'}
          </span>
          <span
            className="button is-info is-small"
            onClick={() => handleSave(bodyInput)}
            role="presentation"
          >
            {'Save'}
          </span>
        </div>
      </div>
    );
  }
}

CardBody.defaultProps = {
  body: '',
  withLabel: false,
};

CardBody.propTypes = {
  body: PropTypes.string,
  handleSave: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  withLabel: PropTypes.bool,
};

export default CardBody;
