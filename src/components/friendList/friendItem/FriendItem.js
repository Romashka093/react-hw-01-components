import React from 'react';
import css from './FriendItetm.module.css';

const FriendItem = ({ friends }) => (
  <>
    {friends.map(friend => {
      return (
        <li className={css.item} key={friend.id}>
          <span className={friend.isOnline ? css.online : css.offline}></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      );
    })}
  </>
);

export default FriendItem;
