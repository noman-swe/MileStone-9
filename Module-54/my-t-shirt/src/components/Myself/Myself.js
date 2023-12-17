import React from 'react';
import './Myself.css';
import SpecialGift from '../SpecialGift/SpecialGift';

const Myself = ({ house, specialGift }) => {
    return (
        <div>
            <h3>Me</h3>
            <p>House : {house} </p>
            <SpecialGift specialGift={specialGift}></SpecialGift>
        </div>
    );
};

export default Myself;