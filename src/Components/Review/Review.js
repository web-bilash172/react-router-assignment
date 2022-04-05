import React from 'react';
import './Review.css'
const Review = (props) => {
    const { name, city, rating, description } = props.review;
    return (
        <div className='review-details'>
            <h2>{name}</h2>
            <p>rating:{rating}</p>
            <p>City:{city}</p>
            <p>{description}</p>
        </div>
    );
};

export default Review;