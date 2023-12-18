import React, { useContext } from 'react';
import './Sister.css';
import { RingContext } from '../GrandPa/GrandPa';

const Sister = () => {
    const [dadarlathi, house, setHouse] = useContext(RingContext);
    const houseIncrement = () => {
        const newHouse = house + 1;
        setHouse(newHouse); 
    } 
        

    return (
        <div>
            <h3>Sister</h3>
            <p>House : {house}</p>
            <p>New House : {house}</p>
            <button onClick={houseIncrement}>new House</button>
        </div>
    );
};

export default Sister;