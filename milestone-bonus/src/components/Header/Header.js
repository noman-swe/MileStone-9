import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link to="/">main</Link>
            {/* <Link to="/main">Main</Link> */}
            <Link to="/volunteers">Volunteers</Link>
        </nav>
    );
};

export default Header;