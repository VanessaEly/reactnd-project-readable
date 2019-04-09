import React from 'react';

/**
 * @constructor Footer
 * @description Creates the application footer
 */
const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p className="footer-header">
        <span className="has-text-weight-bold">React Readable</span>
        {' was made with love by Vanessa Ely'}
      </p>
      <p className="footer-body">
        This is the second project from the
        <a className="has-text-weight-bold" href="https://www.udacity.com/course/react-nanodegree--nd019">
          {' Udacity\'s React Developer Nanodegree'}
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
