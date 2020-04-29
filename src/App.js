import React, { Component } from 'react';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import { FriendList } from './components/friendList/FriendList';
import TransactionHistory from './components/transactionHistory/TransactionHistory';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </>
    );
  }
}

export default App;
