import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className='home'>
            <div className='product-container'>
                <div className='product-details'>
                    <h1>Grab Your Best <span>Coice from Us </span></h1>
                    <p>
                        To get the best laptop in an affordable price, very come fast to us.We have some best
                        collections of laptop.We are always promisable to give you the best services.And you will
                        get one year service warenty from us.
                    </p>
                    <button>Know More</button>
                </div>
                <div className='product-ing'>
                    <img src="https://images.news18.com/ibnlive/uploads/2021/08/1628224744_hp-envy-14-laptop-1200x800.jpg?impolicy=website&width=510&height=356" alt="" />
                </div>
            </div>
            <div className='customers-review'>
                <h1>Customer's Reviews</h1>
            </div>
        </div>
    );
};

export default Home;