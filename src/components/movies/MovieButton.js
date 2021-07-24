import React from 'react';
import { connect } from 'react-redux';
import {FaStar} from 'react-icons/fa';

import { AddFavoriteMovie } from '../../redux/actions/movies/movieActions';
import { Link } from 'react-router-dom';



const MovieButton = ({movie, favorites, addFavorite}) => {

    const favoritesMovie = favorites.find((favoriteMovie) => favoriteMovie.id === movie.id);

    const renderButton = () => {
        if(favoritesMovie){
            return (
                <Link className='btn btn-primary' to={{pathname:'/cart', movieId: movie.id}}>
                    Cart
                </Link>
            )
        }else{
            return (
                <button onClick={() => {addFavorite(movie)}} className='btn btn-primary'>
                    <FaStar className= {favoritesMovie ? 'favorite' : ''}/>
                </button>
            )
        }
    }

    return renderButton();

    
}

const mapStateToProps = (state) => {
    return {
        favorites: state.movies.favorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFavorite: (movie) => dispatch(AddFavoriteMovie(movie))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieButton);