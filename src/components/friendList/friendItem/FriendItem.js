import React from 'react';
import PropTypes from 'prop-types';

const FriendItem = ({ friends }) => (
  <>
    {friends.map(friend => {
      return (
        <li className="item" key={friend.id}>
          <span className="status">{friend.isOnline}</span>
          <img
            className="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      );
    })}
  </>
);

FriendItem.defaultProps = {
  name: 'name avatar',
  avatar:
    'https://www.sctech.edu/wp-content/plugins/ajax-search-pro/img/default.jpg',
};

FriendItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
  ),
};

export default FriendItem;
