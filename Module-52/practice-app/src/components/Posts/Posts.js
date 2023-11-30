import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return (
        <div>
            {/* <h2>This is Posts</h2> */}
            {
                posts.map(post => <Link 
                    className='mr-4 bg-indigo-100'
                    key={post.id}
                    to={`/posts/${post.id}`}
                >
                    Post No. {post.id}
                </Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;