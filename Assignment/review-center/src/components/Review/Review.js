import React, { useContext } from 'react';
import './Review.css';
import { ReviewContext } from '../Home/Home';
import Rev from '../Rev/Rev';

const Review = () => {
    const reviewValue = useContext(ReviewContext);
    const reviews = reviewValue[0];
    const shortReview = reviews.slice(0, 3);
    return (
        <div className='review'>
            {reviews.length === 3 ? <p>No Reviews</p> :
                shortReview.map(review => <Rev 
                    review={review}
                    key={review._id}
                >

                </Rev>)}

            <button className='btn bg-lime-300 border-lime-700 hover:bg-lime-500 rounded-lg show-btn'> Show All Reviews</button>
        </div>
    );
};

export default Review;