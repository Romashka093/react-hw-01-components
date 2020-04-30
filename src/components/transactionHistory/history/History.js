import React from 'react';
import css from './History.module.css';

const History = ({ items }) => (
  <>
    {items.map(item => (
      <tr className={css.colum} key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    ))}
  </>
);

export default History;
