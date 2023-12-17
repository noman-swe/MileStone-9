import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const SpecialGift = ({ ornament }) => {

    // receiving context value
    const ring = useContext(RingContext);
    return (
        <div>
            <h3>Special</h3>
            <p>Gift:{ornament}</p>
            <p>Precius Gift: {ring}</p>
        </div>
    );
};

export default SpecialGift;