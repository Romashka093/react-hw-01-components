import React from 'react';
import { TitleTransactionHistory } from './titleTransactionHistory/TitleTransactionHistory.js';
import { History } from './history/History.js';
import css from './TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <>
      <table className={css.transactionHistory}>
        <thead>
          <TitleTransactionHistory />
        </thead>
        <tbody className={css.transactions}>
          <History items={items} />
        </tbody>
      </table>
    </>
  );
}
