import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { friend } = props;
    const { name, username, id } = friend;

    const navigate = useNavigate();
    const showFriendDetail = () => {
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div className='border justify-center'>
            <h3 className='font-bold mt-8 mb-3'>Name: {name}</h3>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={showFriendDetail}>
                {username} & id {id}</button>
        </div>
    );
};

export default Friend;