import React from 'react';
import { getInitials } from '../utils/shared';
import PropTypes from 'prop-types';

/**
 * Displays the user avatar and gets his initials
 */
const UserAvatar = (props) => (
  <div className="media-left">
    <div className="avatar-circle-sm">
      <span className="initials">{getInitials(props.author)}</span>
    </div>
  </div>
);

UserAvatar.propTypes = {
  author: PropTypes.string.isRequired,
};

export default UserAvatar;
