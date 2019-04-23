import React from 'react';
import { getInitials } from '../utils/shared';
import PropTypes from 'prop-types';

/**
 * @constructor UserAvatar
 * @description Displays the user avatar
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