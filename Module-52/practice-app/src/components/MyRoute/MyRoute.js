import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Friends from '../Friends/Friends';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';
import FriendDetail from '../FriendDetail/FriendDetail';
import Posts from '../Posts/Posts';
import PostDetail from '../PostDetail/PostDetail';
import Countries from '../Countries/Countries';
import CountryDetail from '../CountryDetail/CountryDetail';

const MyRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home></Home>}>Home</Route>
                <Route path='/friends' element={<Friends></Friends>}>Friends</Route>
                <Route path='/friend/:friendId' element={<FriendDetail> </FriendDetail>}>Friends</Route>

                {/* nested Routing */}
                <Route path='/posts' element={<Posts></Posts>}>
                    Posts
                    <Route path=':postId' element={<PostDetail></PostDetail>}></Route>
                </Route>

                {/* ountries */}
                <Route path='/countries' element={<Countries></Countries>}></Route>
                <Route path='/country/:countryName' element={<CountryDetail></CountryDetail>}></Route>

                <Route path='/about' element={<About></About>}>About</Route>
                <Route path='*' element={<NotFound></NotFound>}>About</Route>
            </Routes>
        </div>
    );
};

export default MyRoute;