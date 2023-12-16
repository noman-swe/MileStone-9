import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h3>Welcome to TShirt Mania!!</h3>
            <nav>
                <Link to={'/home'}>Home</Link>
                <Link to={'/orderRewview'}>Order Review</Link>
            </nav>
        </div>
    );
};

export default Header;