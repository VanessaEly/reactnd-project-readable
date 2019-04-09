import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './containers/Dashboard';
import PostDetails from './containers/PostDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section className="hero is-light is-fullheight">
          <Header />
          <Route path="/" exact component={Dashboard} />
          <Route exact path="/:category" component={Dashboard} />
          <Route path="/:category/:post_id" component={PostDetails} />
          <Footer />
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
