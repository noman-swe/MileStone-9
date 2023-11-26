import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
    const [menuOpen, setMunuPOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', link: "./home" },
        { id: 2, name: 'Shop', link: "./shop" },
        { id: 3, name: 'Deals', link: "./deals" },
        { id: 4, name: 'Cupons', link: "./cupons" },
        { id: 5, name: 'Contact', link: "./contact" },
    ]
    return (
        <nav className={`${menuOpen ? 'bg-indigo-200 duration-500' : 'bg-white'}`}>

            <div className='w-6 h-6 md:hidden' onClick={() => setMunuPOpen(!menuOpen)}>
                {menuOpen ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>

            <ul className={` md:flex justify-center duration-500 ease-in absolute md:static  w-full ${menuOpen ? 'top-6 bg-indigo-200' : 'top-[-500px] '} `}>
                {routes.map(route => <Link
                    key={route.id}
                    route={route}
                ></Link>)}
            </ul>

        </nav>
    );
};

export default Navbar;