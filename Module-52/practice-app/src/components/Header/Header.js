import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between py-4 bg-slate-200 mb-8'>
            <p className='pl-20'><Link to={'/'}>I'm Header</Link></p>
            <nav className='pr-20'>
                <Link to="/" className='mr-2'>Home</Link>
                <Link to="/friends" className='mr-2'>Friends</Link>
                <Link to="/posts" className='mr-2'>Posts</Link>
                <Link to="/countries" className='mr-2'>Countries</Link>
                <Link to="/about">About</Link>
                <Link to="*"></Link>
            </nav>
        </div>
    );
};

export default Header;