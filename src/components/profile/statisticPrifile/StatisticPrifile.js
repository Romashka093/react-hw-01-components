import React from 'react';
import css from './StatisticPrifile.module.css';

export function StatisticPrifile({ stats }) {
  const followers = stats.followers.toLocaleString('ru-RU', {
    useGrouping: true,
  });

  const views = stats.views.toLocaleString('ru-RU', {
    useGrouping: true,
  });

  const likes = stats.likes.toLocaleString('ru-RU', {
    useGrouping: true,
  });

  return (
    <>
      <li className={css.stat}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li className={css.stat}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li className={css.stat}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </>
  );
}
