import React from 'react';
import css from './StatsStatistics.module.css';

const StatsStatistics = ({ stats }) => {
  return stats.map(stat => (
    <li className={css.item} key={stat.id}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}%</span>
    </li>
  ));
};

export default StatsStatistics;
