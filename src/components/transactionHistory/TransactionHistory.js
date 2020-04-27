import React from 'react';
import Title from './title/Title.js';
import History from './history/History.js';


const TransactionHistory = ({ items }) => (
    <>
        <table class="transaction-history">
            <Title />
        </table>
        <tbody>
            <History items={items} />
        </tbody>
    </>
);

export default TransactionHistory;