import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * Creates the application header
 */
class Navbar extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    this.state = {
      navToggled: false,
    }
  }
  /**
   * Toggles the burger dropdown menu (only visible on mobile version)
   */
  toggleBurgerMenu() {
    this.setState(prevState => ({ navToggled: !prevState.navToggled }));
  }
  render() {
    const { navToggled } = this.state;
    const { loading, categories, match } = this.props;
    const isToggled = navToggled && 'is-active';
    const category = match && match.params ? match.params.category : '';

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
              <span
                className={`navbar-burger burger ${isToggled}`}
                data-target="navbarMenuHeroB"
                onClick={() => this.toggleBurgerMenu()}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroB" className={`navbar-menu ${isToggled}`}>
              <div className="navbar-center">
                {!loading &&
                  Object.keys(categories).map((id) => (
                    <Link
                      className={`navbar-item ${categories[id].name === category ? 'selected' : ''}`}
                      to={`/${categories[id].path}`}
                      key={categories[id].name}>
                        {categories[id].name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

function mapStateToProps ({ categories}) {
  return {
    loading: categories === null,
    categories,
  }
};

export default connect(mapStateToProps)(Navbar);
