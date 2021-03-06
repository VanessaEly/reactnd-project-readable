import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { receiveCategories } from './actions/categories';
import Footer from './components/Footer';
import Dashboard from './containers/Dashboard';
import PostDetails from './containers/PostDetails';
import PageNotFound from './components/PageNotFound';

class App extends Component {
  componentDidMount() {
    const { getCategories } = this.props;
    getCategories();
  }

  render() {
    return (
      <BrowserRouter>
        <section className="hero is-light is-fullheight">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/:category" component={Dashboard} />
            <Route exact path="/:category/:post_id" component={PostDetails} />
            <Route path="*" component={() => <PageNotFound />} />
          </Switch>
          <Footer />
        </section>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  getCategories: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getCategories: () => {
    dispatch(receiveCategories());
  },
});

export default connect(null, mapDispatchToProps)(App);
