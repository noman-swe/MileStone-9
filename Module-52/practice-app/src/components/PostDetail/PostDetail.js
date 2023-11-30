import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const params = useParams();
    const {postId} = params;
    const [post, setPost] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [postId]);
    console.log(post);

    return (
        <div>
            <h3 className='text-lg font-semibold my-4'>Post Detail for : {postId}</h3>
            <h3 className='text-xl font-bold'>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;