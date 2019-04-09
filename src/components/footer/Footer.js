import React from 'react'

/**
 * @constructor Footer
 * @description Creates the application footer
 */
const Footer= () => (
  <footer className='footer'>
    <div className='content has-text-centered'>
      <p className='footer-header'>
        <strong>React Readable</strong> was made with love by
        <a href='https://jgthms.com'> Vanessa Ely</a>.
      </p>
      <p className='footer-body'>
        This is the second project from the
        <a href='https://www.udacity.com/course/react-nanodegree--nd019'>
          <strong> Udacity's React Developer Nanodegree </strong>
        </a>
        program.
      </p>
    </div>
  </footer>
);

export default Footer;