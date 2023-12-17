import React, { useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css';

const GrandPa = () => {
    const [house, setHouse] = useState(1);

    const handleHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }

    const specialGift = 'Dimond Ring';
    return (
        <div className='grandpa'>
            <h2>Grand Pa</h2>
            <div className="houses">
                <p>House : {house}</p>
                <button onClick={() => handleHouse()}>Buy a House</button>
            </div>

            <div style={{ display: 'flex' }}>
                <Father house={house} specialGift={specialGift}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </div>
        </div>
    );
};

export default GrandPa;