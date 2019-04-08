import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route  } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';
import PostDetails from './PostDetails';
import { receiveCategories } from '../actions/categories';
import { receivePosts } from '../actions/posts';
import Navbar from './Navbar';

class App extends Component {
  componentDidMount() {
    this.props.receiveCategories();
  }
  render() {
    return (
      <BrowserRouter>
        
        <LoadingBar />
        {this.props.loading
          ? null
          : 
          <Fragment>
            <Navbar />
            <Route path='/' exact component={Dashboard} />
            <Route exact path="/:category" component={Dashboard} />
            <Route path='/:category/:post_id' component={PostDetails} />
          </Fragment>
        }
      </BrowserRouter>
    );
  }
}
App.propTypes = {
  receiveCategories: PropTypes.func,
  receivePosts: PropTypes.func
};
function mapStateToProps ({ categories}) {
  return {
    loading: categories === null,
  }
};
export default connect(mapStateToProps, { receiveCategories, receivePosts })(App);