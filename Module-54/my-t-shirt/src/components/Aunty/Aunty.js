import React, { useContext } from 'react';
import './Aunty.css';
import { RingContext } from '../GrandPa/GrandPa';

const Aunty = (props) => {
    const ringforAunty = useContext(RingContext);

    return (
        <div>
            <h3>Aunty</h3>
            <p>House : {props.house}</p>
            <p>{ringforAunty}</p>
        </div>
    );
};

export default Aunty;