import React from 'react';
import { useNavigate } from 'react-router-dom';

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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={showUserDetails}>
                {username}</button>
        </div>
    );
};

export default Friend;