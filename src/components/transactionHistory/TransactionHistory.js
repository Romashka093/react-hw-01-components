import React from 'react';
import Title from './title/Title.js';
import History from './history/History.js';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => (
  <>
    <table className="transaction-history">
      <thead>
        <Title />
      </thead>
      <tbody>
        <History items={items} />
      </tbody>
    </table>
  </>
);

export default TransactionHistory;
