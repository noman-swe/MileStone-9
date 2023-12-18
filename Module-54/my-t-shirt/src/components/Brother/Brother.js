import React, { useContext } from 'react';
import './Brother.css';
import { ChacharMangoTree } from '../Father/Father';

const Brother = ({house}) => {
    const mangoTree = useContext(ChacharMangoTree);
    return (
        <div>
            <h3>Brother</h3>
            <p>House : {house}</p>
            <p>Baba disy: {mangoTree}</p>
        </div>
    );
};

export default Brother;