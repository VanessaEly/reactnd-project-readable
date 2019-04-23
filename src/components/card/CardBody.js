import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInputField from '../TextInputField';

/**
 * @constructor CardBody
 * @description Creates the footer part of the post component
 */
class CardBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyInput: '',
    }
  }
  componentWillMount(){
    this.setState(() => ({
      bodyInput: this.props.body,
    }));
  }
  /**
   * Handles changes on the editMode body input
   */
  handleBodyChange = (e) => {
    this.setState({ bodyInput: e.target.value });
  }
  render() {
    const { bodyInput } = this.state;
    const { handleSave, toggleEditMode, withLabel } = this.props;
    
    return (
      <div>
        <TextInputField name='Body' withLabel={withLabel} value={bodyInput} handleChange={this.handleBodyChange}/>
        <div className="buttons has-addons is-right">
          <span className="button is-small" onClick={() => toggleEditMode()}>Cancel</span>
          <span className="button is-info is-small" onClick={() => handleSave(bodyInput)}>Save</span>
        </div>
      </div>
    );
  }
};

CardBody.defaultValues = {
  withLabel: false,
}

CardBody.propTypes = {
  body: PropTypes.string.isRequired,
  handleSave: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func,
  withLabel: PropTypes.bool,
};

export default CardBody;