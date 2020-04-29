import React from 'react';
import FriendItem from './friendItem/FriendItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      <FriendItem friends={friends} />
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
