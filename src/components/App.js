import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route  } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';
import PostDetails from './PostDetails';
import { receiveCategories } from '../actions/categories';
import { receivePosts } from '../actions/posts';
import Header from './header/Header';
import Footer from './footer/Footer';

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
          <section className="hero is-light is-large">
            <Header />
            <Route path='/' exact component={Dashboard} />
            <Route exact path="/:category" component={Dashboard} />
            <Route path='/:category/:post_id' component={PostDetails} />
            <Footer />
          </section>
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