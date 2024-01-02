import React, { useEffect, useState } from 'react';
import './Main.css';
import Activity from '../Activity/Activity';
import useVolunteers from '../../hooks/useVolunteers';

const Main = () => {
    // const [volunteers] = useVolunteers();
    const [searchText, setSearchText] = ('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        console.log('inside the use Effect');
        fetch('data.json')
        .then(res => res.json())
        .then(data =>{
            const matchResult = data.filter(d => d.title.toLowerCase().includes(searchText));
            setSearchResult(matchResult);
        })
    }, [searchText])

    const handleSearchChange = event => {
        setSearchText(event.target.value);

    }
    /* 
    const handleSearchChange2 = event => {
        const searchText = event.target.value;
        const matchResult = volunteers.filter(v => v.title.toLowerCase().includes(searchText));
        setSearchResult(matchResult);
    }
 */
    return (
        <div>
            <h2>Volunteer Activities: {searchResult.length}</h2>

            <div style={{ 'margin': '20px', 'border': '1px solid gray', 'padding': '26px 50px 50px 50px', 'width': '400px', 'margin': '0 auto', 'marginBottom': '20px', 'borderRadius': '10px' }}>
                <p style={{ 'fontSize': '20px' }}>Search for your Volunteer.</p>
                <input onChange={handleSearchChange} type="text" placeholder='search' style={{ 'padding': '20px', 'fontSize': '20px' }} />
            </div>
            <div className="activity-container">
                {
                    searchResult.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Main;