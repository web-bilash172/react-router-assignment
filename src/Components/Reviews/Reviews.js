import React from 'react';

import useReviews from '../Hooks/useReview';
import Review from '../Review/Review';
const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h1 className='cr'>What Our Customers Say..!!!</h1>
            <div className='customers-review'>

                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>

        </div>
    );
};

export default Reviews;