import React, { useEffect, useState } from 'react';

import Activity from '../Activity/Activity';
import './Main.css';

const Main = () => {
   const [Volunteers, setVolunteers] = useState([]);
   
    return (
        <div>
            <h2>Volunteer Activities: </h2>
            <div style={{'margin': '20px'}}>
                <input  type="text" placeholder='search'/>
            </div>
            <div className="activity-container">
                
            </div>
        </div>
    );
};

export default Main;