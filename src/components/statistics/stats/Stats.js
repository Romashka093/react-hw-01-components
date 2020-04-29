import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ stats }) => {
  return stats.map(stat => (
    <li className="item" key={stat.id}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </li>
  ));
};

export default Stats;
