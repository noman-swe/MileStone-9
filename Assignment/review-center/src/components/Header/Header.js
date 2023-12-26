import React from 'react';
import logoImg from '../../utilities/download-2.jpg';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header flex items-center justify-between'>
            <div className="logo-image pl-20">
                <Link to={'/home'}>
                <img src={logoImg}  alt="" className='cursor-pointer'/>
                </Link>
            </div>
            <nav className='text-center mt-4 pr-20'>
                <Link to={'/home'} >Home</Link>
                <Link to={'/reviews'}>Reviews</Link>
                <Link to={'/dashboard'}>Dashboard</Link>
                <Link to={'/blogs'}>Blogs</Link>
                <Link to={'/about'}>About</Link>
            </nav>

        </div>
    );
};

export default Header;