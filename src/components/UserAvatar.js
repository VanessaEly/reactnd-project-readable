import React from 'react';
import PropTypes from 'prop-types';
import { getInitials } from '../utils/shared';

/**
 * Displays the user avatar and gets his initials
 */
const UserAvatar = (props) => {
  const { author } = props;

  return (
    <div className="media-left">
      <div className="avatar-circle-sm">
        <span className="initials">{getInitials(author)}</span>
      </div>
    </div>
  );
};

UserAvatar.propTypes = {
  author: PropTypes.string.isRequired,
};

export default UserAvatar;
