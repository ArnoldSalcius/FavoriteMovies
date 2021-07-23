import React from 'react';
import { NavLink } from 'react-router-dom';




const Header = () => {
    return(
        <div className='header'>
            <div className='brand'>
                <NavLink to='/'>FavMovies OFC</NavLink>
            </div>
            <div>
                <NavLink to='/cart'>Cart Logo</NavLink>
            </div>
        </div>

    )
}



export default Header;