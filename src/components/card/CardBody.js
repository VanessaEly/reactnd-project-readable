import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const { handleSave, toggleEditMode } = this.props;
    return (
      <div>
        <input className="input" type="text" placeholder="Post content" value={bodyInput}
        onChange={this.handleBodyChange}/>
        {bodyInput.trim().length === 0
          && <p className="help is-danger">Body requires at least one character</p>
        }
        <div className="buttons has-addons is-right">
          <span className="button is-small" onClick={() => toggleEditMode()}>Cancel</span>
          <span className="button is-info is-small" onClick={() => handleSave(bodyInput)}>Save</span>
        </div>
      </div>
    );
  }
};

CardBody.propTypes = {
  body: PropTypes.string.isRequired,
  handleSave: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
};

export default CardBody;