import React from 'react';
import FriendItem from './friendItem/FriendItem';

const FriendList = ({ friends }) => {

    return (
        <ul className="friend-list">
            <FriendItem friends={friends} />
        </ul>
    )
};

export default FriendList;