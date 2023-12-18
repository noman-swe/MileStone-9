import React, { createContext } from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import './Father.css';

export const ChacharMangoTree = createContext('aam aam');

const Father = ({ house, ornament }) => {
    const tree = 'Onnk aaaaam';
    return (
        <ChacharMangoTree.Provider value={tree}>
            <div>
                <h3>Father</h3>
                <p>House :{house}</p>
                <div className='child-of-father' style={{ display: 'flex' }}>
                    <Myself house={house} ornament={ornament}></Myself>
                    <Brother house={house}></Brother>
                    <Sister house={house}></Sister>
                </div>
            </div>
        </ChacharMangoTree.Provider>
    );
};

export default Father;