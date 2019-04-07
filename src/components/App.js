import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import LoadingBar from 'react-redux-loading-bar';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    return (
      <Fragment>
        {/* <LoadingBar /> */}
        <div className="App">
          <section className="section">
            <div className="container">
              <h1 className="title">Readable</h1>
              <p className="subtitle">Udacity Project by Vanessa Ely</p>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

// Type checking the props of the component
App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default connect()(App);
