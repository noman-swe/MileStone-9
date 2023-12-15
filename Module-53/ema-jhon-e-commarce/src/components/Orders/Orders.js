import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
// import '../Shop/Shop.css';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    console.log(cart);
    console.log(products);
    return (
        <div className='shop-container'>
            <div className="reviews-items-container">
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        key={product.id}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;