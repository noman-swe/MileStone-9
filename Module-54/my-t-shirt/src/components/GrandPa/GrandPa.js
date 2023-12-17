import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css';

const GrandPa = () => {
    const house = 7;
    return (
        <div className='grandpa'>
            <h2>Grand Pa</h2>
            <p>House : {house}</p>

            <div style={{ display: 'flex' }}>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </div>

        </div>
    );
};

export default GrandPa;