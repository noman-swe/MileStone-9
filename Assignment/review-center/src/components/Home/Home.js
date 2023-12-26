import React, { createContext, useEffect, useState } from 'react';
import bannerLogo from '../../utilities/headingSample-1.jpg';
import './Home.css';
import Review from '../Review/Review';
export const ReviewContext = createContext('review');

const Home = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <ReviewContext.Provider value={[reviews, setReviews]}>

            <div className='home'>
                <div className='home-banner flex justify-between px-20'>
                    <div className="banner-text-section w-full py-14">
                        <div className="banner-title pb-5">
                            <h2 className='text-5xl text-lime-500 font-bold'>Review your favorite <span className='text-fuchsia-900'>movie.</span></h2>
                            <h2 className='text-5xl font-bold text-blue-600'>Honest opinions that <span style={{ color: 'purple' }}>matters.</span></h2>
                        </div>
                        <div className='w-9/12 text-gray-700'>
                            <p>
                                My favourite film is "Inception". In this film people can go inside dreams. One day a pearson tells Cobb, which is the main character, that if he does it he can go back to the USA, where his children live, because he had to escape from that country because of an accuse. I give this film ⭐⭐⭐⭐⭐.
                            </p>
                            <button className='bg-lime-200 text-indigo-600 ml-3 py-3 px-4 rounded mt-7 hover:bg-blue-400 hover:text-white'>Live Demo</button>
                        </div>
                    </div>

                    <div className="banner-image w-96" >
                        <img src={bannerLogo} alt="" style={{ height: '500px' }} />
                    </div>
                </div>

                <div className='coustomer-review-section'>
                    <h3 className='text-4xl text-center rev-text'>Coustomer Reviews (3)</h3>
                    <div className="reviews">

                        {     /* reviews.map(userReview => <Review
                                userReview={userReview}
                                key={userReview._id}

                            ></Review>) */
                        }
                        {reviews.length !== 3 ? <Review></Review> : "No reviews" }
                        

                    </div>
                    <button className='btn bg-blue-500 w-50 mt-10 text-2xl py-2 rounded text-white hover:bg-blue-700'>All Reviews</button>
                </div>

            </div>
        </ReviewContext.Provider>
    );
};

export default Home;