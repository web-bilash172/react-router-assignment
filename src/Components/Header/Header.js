import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <Link className='link-text' to='/home'>HOME</Link>
            <Link className='link-text' to='/reviews'>REVIEWS</Link>
            <Link className='link-text' to='/dashboad'>DASHBOARD</Link>
            <Link className='link-text' to='/blogs'>BLOGS</Link>
            <Link className='link-text' to='/about'>ABOUT</Link>

        </div>
    );
};

export default Header;