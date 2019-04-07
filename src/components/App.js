import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import LoadingBar from 'react-redux-loading-bar';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  };

  render() {
    return (
      <Fragment>
        {/* <LoadingBar /> */}
        <div className="App">App
        </div>
      </Fragment>
    );
  }
}

export default connect()(App);
