import React from 'react';
import css from './Profile.module.css';
import DescriptionProfile from './descriptionProfile/DescriptionProfile';
import StatisticPrifile from './statisticPrifile/StatisticPrifile';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={css.profile}>
    <DescriptionProfile
      name={name}
      tag={tag}
      location={location}
      avatar={avatar}
    />
    <ul className={css.stats}>
      <StatisticPrifile stats={stats} />
    </ul>
  </div>
);

export default Profile;
