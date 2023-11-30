import { findByText } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const params = useParams();
    const { friendId } = params;
    const [friend, setFriend] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [friendId]);

    console.log(friend);

    return (
        <div>
            <h3 className='text-2xl mb-2'>This is Details of my friend <span className='text-3xl '>{friend.name}</span> </h3>
            <p>Email: <span className='font-bold font-mono'>{friend.email}</span></p>
            <p>Website: <span className='font-bold font-mono'>{friend.website}</span></p>
            <p>Company: <span className='font-bold font-mono'>{friend.company?.name}</span></p>
            <p>City: <span className='font-bold font-mono'>{friend.address?.city}</span></p>

        </div>
    );
};

export default FriendDetail;