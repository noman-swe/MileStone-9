import React from 'react';
import './Myself.css';

const Myself = ({house}) => {
    return (
        <div>
            <h3>Me</h3>
            <p>House : {house}</p>
        </div>
    );
};

export default Myself;