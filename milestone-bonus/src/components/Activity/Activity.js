import React from 'react';
import './Activity.css';

const Activity = (props) => {
    const { activity } = props;
    const { img, title } = activity;

    return (
        <div className='activity'>
            <img src={img} alt="" />
            <h2>{title}</h2>
        </div>
    );
};

export default Activity;