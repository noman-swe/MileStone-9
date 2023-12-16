import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import { addToDb, getShoppingCart } from '../../utilities/localdb';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedProduct = getShoppingCart();
        const savedCart = [];
        for (const storedId in storedProduct) {
            const addedProducts = products.find(product => product.id === storedId)
            if (addedProducts) {
                const quantity = storedProduct[storedId];
                addedProducts.quantity = quantity;

                savedCart.push(addedProducts);
            }
            setCart(savedCart);
        }
    }, [products]);

    const handleAddToCart = clickedProduct => {
        let newCart = [];
        const exists = cart.find(product => product.id === clickedProduct);
        if (!exists) {
            clickedProduct.quantity = 1;
            newCart = [...cart, clickedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== clickedProduct);
            exists.quantity = exists.quantity + 1;
            newCart = [rest, exists];
        }
        setCart(newCart);
        addToDb(clickedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                }
            </div>
            <div className="cart-container">
                {
                    <Cart cart={cart}>
                        <Link to={'/orders'}>
                            <button>Review Order</button>
                        </Link>
                    </Cart>
                }
            </div>
        </div>
    );
};

export default Shop;