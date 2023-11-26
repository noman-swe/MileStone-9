import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', Link: "./home" },
        { id: 2, name: 'Shop', Link: "./shop" },
        { id: 3, name: 'Deals', Link: "./deals" },
        { id: 4, name: 'Cupons', Link: "./cupons" },
        { id: 5, name: 'Contact', Link: "./contact" },
    ]
    return (
        <nav>
            <ul>
                {routes.map(route => <Link
                    key={route.id}
                    route={route}
                ></Link>)}
            </ul>
        </nav>
    );
};

export default Navbar;