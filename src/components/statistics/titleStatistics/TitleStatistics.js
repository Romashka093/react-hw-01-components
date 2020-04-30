import React from 'react';
import css from './TitleStatistics.module.css';

const TitleStatistics = ({ title }) => (
  <>
    <h2 className={css.title}> {title}</h2>
  </>
);

export default TitleStatistics;
