import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostSort from './post/PostSort';

/**
 * @constructor CardBody
 * @description Creates the footer part of the post component
 */
class Sort extends Component {
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
    const { currentSort, sortChange } = this.props;

    return (
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="card">
            <header className="card-header">
              <div className="media card-header-title is-centered">
                Sort
              </div>
            </header>
            <div className="card-content">
              <PostSort
                currentSort={currentSort}
                sortChange={sortChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

Sort.propTypes = {
  currentSort: PropTypes.shape({
    field: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
  }).isRequired,
  sortChange: PropTypes.func.isRequired,
};

export default Sort;

