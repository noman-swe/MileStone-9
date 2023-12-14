import React from 'react';
import './Product.css';

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const { img, name, price, seller, ratings } = product;


    return (
        <div className='product'>
            <img src={img} alt='img' />
            <div className="product-info">
                <span className='product-name'>{name}</span>
                <p>Price : ${price}</p>
                <p><small>Seller:{seller} </small> </p>
                <p><small>Ratings: {ratings}</small>  </p>
            </div>

            <button className='btn-cart' onClick={() => handleAddToCart(product)}>
                <p className='btn-text'>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;