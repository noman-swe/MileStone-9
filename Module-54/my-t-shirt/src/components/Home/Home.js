import React from 'react';
import Cart from '../Cart/Cart';
import './Home.css';
import useTShirt from '../../hooks/useTShirt';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const [tShirts, setTShirts] = useTShirt();
    // console.log(tShirts);

    const handleAddToCart = clickedTShirt => {
        console.log(clickedTShirt);
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        // handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;