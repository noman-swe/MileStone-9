import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css';
import useTShirt from '../../hooks/useTShirt';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const [tShirts, setTShirts] = useTShirt();
    const [cart, setCart] = useState([]);

    const handleAddToCart = clickedTShirt => {

        const exists = cart.find(tShirt => tShirt._id === clickedTShirt._id);
        if(!exists){
            const newCart = [...cart, clickedTShirt];
            setCart(newCart);
        }
        else{
            alert('item already added.')
        }

    }

    // handleRemoveFromCart function ti chaile cart compoment ew likhte partam but oi khan e likhte gele props hisheb e setCart ta kew pathate hobe tai better hocchy j-khaan e cart state declare kora hoisy oi khaan e likhaa;

    const handleRemoveFromCart = selectedItem => {
        // baad dewar or remove er rule hocchy jeta remove korbo oita baaad diye onno gulo k rest er modddhy nibo then rest k setCart e pathiye dibo
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest);
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                >
                </Cart>
            </div>
        </div>
    );
};

export default Home;