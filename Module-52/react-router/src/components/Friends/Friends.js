import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    console.log(friends);
    return (
        <div>
            <h2 className='text-6xl text-center py-4 bg-orange-200'> <span className='text-bold text-emerald-500'>Hello </span> Friends!! How are you?</h2>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}>

                </Friend>)
            }
        </div>
    );
};

export default Friends;