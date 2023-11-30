import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h3 className='text-2xl'>This is Details of friend No. {params.friendId}</h3>
        </div>
    );
};

export default FriendDetail;