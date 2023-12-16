import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
// import '../Shop/Shop.css';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/localdb';
import './Orders.css';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const navigate = useNavigate();

    const handleRemoveProduct = clickedProduct => {
        // jeta click kortesi oi ta k baad diye baki gula k nilam rest er vitor coz ui theke clicked product k remove dekhaite hobe, but reload dile abar ashbe - tai, DB thekew romove kore dite hobe. 
        const rest = cart.filter(product => product.id !== clickedProduct.id);
        setCart(rest);
        removeFromDb(clickedProduct.id);

    }

    return (
        <div className='shop-container'>
            <div className="reviews-items-container">
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        key={product.id}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={()=>navigate('/inventory')}>Proceed Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;