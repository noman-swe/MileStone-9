import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {product} = props;
    const {img, name,  shipping, quantity} = product;
    return (
        <div className='carted-product'>
            <img src={img} alt="" />
            <h3>  {name} <span>{quantity}</span></h3>
        </div>
    );
};

export default ReviewItem;