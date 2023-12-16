import React from 'react';
import './TShirt.css';

const TShirt = (props) => {
    const { tShirt, handleAddToCart } = props;

    const {name, picture, price} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <div className="shirt-infos">
                <h3 className="title">
                    {name}
                </h3>
                <p>Price: ${price}</p>
            </div>
            <button>Add To Cart</button>
        </div>
    );
};

export default TShirt;