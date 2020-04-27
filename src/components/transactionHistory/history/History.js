import React from 'react';

const History = ({ items }) => (
    <>
        {items.map(item => (
            <tr key={item.id}>
                <th>{item.type}</th>
                <th>{item.amount}</th>
                <th>{item.currency}</th>
            </tr>
        ))}
    </>
);

export default History;