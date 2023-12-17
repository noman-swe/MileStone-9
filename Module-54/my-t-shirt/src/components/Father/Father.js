import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import './Father.css';

const Father = ({ house, ornament }) => {
    return (
        <div>
            <h3>Father</h3>
            <p>House :{house}</p>
            <div className='child-of-father' style={{ display: 'flex' }}>
                <Myself house={house} ornament={ornament}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;