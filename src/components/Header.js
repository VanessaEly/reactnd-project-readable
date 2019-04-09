import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { receiveCategories } from '../actions/categories';
class Navbar extends Component {
  state = {
    navToggled: false,
  }
  componentDidMount() {
    this.props.receiveCategories();
  }
  toggleNav = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ navToggled: !prevState.navToggled }));
  }
  render() {
    const { navToggled } = this.state;
    const { loading, categories } = this.props;

    const isToggled = navToggled && 'is-active';
    return (
      <div className="hero-head is-active">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand ">
              <Link className="navbar-item" to='/'>
                <span className="icon is-medium">
                  <i className="fas fa-comment-dots fa-2x" />
                </span>
                <p>React Readable</p>
              </Link>
              <span className={`navbar-burger burger ${isToggled}`} data-target="navbarMenuHeroB" onClick={this.toggleNav}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroB" className={`navbar-menu ${isToggled}`}>
              <div className="navbar-center ">
                {loading 
                  ? <Loading />
                  : categories.map((category) => (
                    <Link className="navbar-item" to={`/${category.path}`} key={category.name}>{category.name}</Link>
                  ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

Navbar.propTypes = {
  receiveCategories: PropTypes.func.isRequired,
};

function mapStateToProps ({ categories}) {
  return {
    loading: categories === null,
    ...categories,
  }
};

export default connect(mapStateToProps, { receiveCategories })(Navbar);