import React from 'react';
import './Aunty.css';

const Aunty = (props) => {
    return (
        <div>
            <h3>Aunty</h3>
            <p>House : {props.house}</p>
        </div>
    );
};

export default Aunty;