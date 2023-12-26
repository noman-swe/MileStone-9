import React from 'react';
import './Rev.css';

const Rev = (props) => {
    console.log(props.review);
    const { address, email, gender, isActive, name, picture, registered, review, _id } = props.review;
    return (
        <div className='rev'>
            <img className='w-96 p-3 m-auto rounded-lg' src={picture} alt="" />
            <div className="infos">
                <h1 className='text-2xl text-purple-800'>Name: <span className='text-purple-400'>{name}</span></h1>
                <p>Review:{review.slice(0, 50)}</p>
                <p>Address: {address}</p>
            </div>
        </div>
    );
};

export default Rev;