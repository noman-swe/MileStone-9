import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Friends from '../Friends/Friends';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';

const MyRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home></Home>}>Home</Route>
                <Route path='/friends' element={<Friends></Friends>}>Friends</Route>
                <Route path='/about' element={<About></About>}>About</Route>
                <Route path='*' element={<NotFound></NotFound>}>About</Route>
            </Routes>
        </div>
    );
};

export default MyRoute;