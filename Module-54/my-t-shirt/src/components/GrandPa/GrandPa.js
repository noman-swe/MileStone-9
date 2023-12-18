import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css';

// use of createContext() -hook
export const RingContext = createContext('Golden Dimond Ring');

const GrandPa = () => {
    const [house, setHouse] = useState(1);

    function handleHouse() {
        const newHouse = house + 1;
        setHouse(newHouse);
    }

    const ornament = 'Dimond Ring';
    const dadarLathi = 'Lathii mere bati bondho kore dibo.'
    return (
        <RingContext.Provider value={[dadarLathi, house, setHouse]}>
            <div className='grandpa'>
                <h2>Grand Pa</h2>
                <div className="houses">
                    <p>House : {house}</p>
                    <button onClick={() => handleHouse()}>Buy a House</button>
                </div>

                <div style={{ display: 'flex' }}>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;