import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend;

    const navigate = useNavigate();

    const showUserDetails = () => {
        const path = `/friend/${id}`;
        navigate(path);

    }

    return (
        <div>
            <p>Name : {name}</p>
            <Link to={'/friend/' + id} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mb-4">Show Detail</Link>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={showUserDetails}>
                {username}</button>
        </div>
    );
};

export default Friend;