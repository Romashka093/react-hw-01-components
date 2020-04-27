import React from 'react';

const Stats = ({ stats }) => {

    return stats.map(stat => (
        <li className="item" key={stat.id} >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
        </li >
    ))

};

export default Stats;