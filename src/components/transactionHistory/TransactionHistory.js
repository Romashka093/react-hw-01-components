import React from 'react';
import TitleTransactionHistory from './titleTransactionHistory/TitleTransactionHistory.js';
import History from './history/History.js';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <>
    <table className={css.transactionHistory}>
      <thead className={css.transactionHistoryTitle}>
        <TitleTransactionHistory />
      </thead>
      <tbody className={css.transactions}>
        <History items={items} />
      </tbody>
    </table>
  </>
);

export default TransactionHistory;
