import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa'


import './Header.css';



const Header = () => {
    return(
        <div className='header'>
            <div className='brand'>
                <NavLink to='/'>FavMovies OFC</NavLink>
            </div>
            <div className='header-cart'>
                <NavLink to='/cart'><FaShoppingCart/></NavLink>
            </div>
        </div>

    )
}



export default Header;