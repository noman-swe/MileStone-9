import React from 'react';
import './Myself.css';
import SpecialGift from '../SpecialGift/SpecialGift';

const Myself = ({ house, ornament }) => {
    return (
        <div>
            <h3>Me</h3>
            <p>House : {house} </p>
            <SpecialGift ornament={ornament}></SpecialGift>
        </div>
    );
};

export default Myself;