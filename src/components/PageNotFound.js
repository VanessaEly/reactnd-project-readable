import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import NotFound from './NotFound';

/**
 * Display a page 404 not found message
 */
const PageNotFound = (props) => {
  const { match } = props;

  return (
    <Fragment>
      <Header match={match} />
      <NotFound subtitle="404 - Page not found" />
    </Fragment>
  );
};

PageNotFound.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      post_id: PropTypes.string,
    }),
  }),
};

PageNotFound.defaultProps = {
  match: null,
};

export default PageNotFound;
