import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, []);

    return (
        <div>
            <h2 className='text-6xl text-rose-400 mb-4'>Hii Friends!!</h2>
            <p className='text-sm ml-60'>How are you?</p>
            <p className='text-lg mr-60 font-bold'>List of friends:</p>
            <div>
                {
                    friends.map(friend => <Friend 
                        key={friend.id}
                        friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;