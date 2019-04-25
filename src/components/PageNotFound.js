import React, { Fragment } from 'react';
import Header from './Header';
import NotFound from './NotFound';

/**
 * Display a page 404 not found message
 */
const PageNotFound = (props) => (
  <Fragment>
    <Header match={props.match} />
    <NotFound subtitle={'404 - Page not found'} />
  </Fragment>
);

export default PageNotFound;
