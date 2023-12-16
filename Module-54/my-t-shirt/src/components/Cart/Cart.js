import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    /* 
    // conditional rendering options
        1. element variable
    */

    //    element variable conditional rendering
    let command;
    if (cart.length === 0) {
        command = <div className='empty-cart-msg'>
            <h4>Oi Kipta! <br /> khoroch kor...</h4>
            <p>Kinos na kn??</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <div className='add-more'>
            <p >Add more...</p>
        </div>
    }
    else {
        command = <p className='thanks'>Thanks for adding</p>
    }

    // conditional formatting operator / ternary operator (condition ? true statement : false statement)





    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h3>Items Selected: {cart.length}</h3>
            {
                cart.map(tShirt =>
                    <p>
                        {tShirt.name}
                        <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                    </p>)
            }
            {command}

            {/* ternary operator #conditional Rendering-2 */}
            {cart.length !== 5 ? <p>Keep adding to 5 products</p> : <button> Remove All</button>}

            {
                cart.length === 5 && <button className='orange'>Review Order</button>
            }

            {/* conditional formatting #3 // cart.length === 0 is true or p class is true.*/}
            {cart.length === 0 || <p className='orange'>yay! let's buy.</p>}
        </div>
    );
};

export default Cart;