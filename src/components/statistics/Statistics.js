import React from 'react';
import Stats from './stats/Stats.js';
import Title from './title/Title.js';

const Statistics = (props) => (
    <>
        <section className="statistics">
            <Title title={props.title} />
            < ul className="stat-list">
                <Stats stats={props.stats} />
            </ul>
        </section>
    </>
);

export default Statistics;