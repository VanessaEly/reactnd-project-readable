import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    const { categories } = this.props;
    console.log('nav props', this.props);
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink className="navbar-item" to={`/`}>
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt='home' />
          </NavLink>
          {/* <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>  */}
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
          
            {categories.map((category) => (
              <NavLink className="navbar-item" to={`/${category.path}`}>{category.name}</NavLink>
            ))}
            {/* <a >
              Home
            </a>

            <a class="navbar-item">
              Documentation
            </a> */}
          </div>
        </div>
      </nav>
    );
  }
};
const mapStateToProps = ({ categories }) => ({
  ...categories
});


export default connect(mapStateToProps)(Navbar);