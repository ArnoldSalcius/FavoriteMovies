import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RemoveFavoriteMovie } from '../redux/actions/movies/movieActions';
import './CartDisplay.css';
import { IMAGES_URL, VISIT_MOVIE_URL } from '../constants';

const CartDisplay = ({ movie, removeFavorite, location, myRef }) => {

    const highlightString = location.movieId === movie.id ? 'highlight' : 'initial';
    const ref = location.movieId === movie.id ? myRef : null;
    const [highlight, setHighlight] = useState(highlightString);



    useEffect(() => {
        const timerId = setTimeout(() => {
            setHighlight('initial');
        }, 1500);

        return () => {
            clearTimeout(timerId);
        }

    }, [])

    return (
        <div ref={ref} className={highlight + ' cart-item'} key={movie.id}>
            <img alt='Movie Backdrop (unavailable)' className='cart-image' src={IMAGES_URL + movie.backdrop_path} />

            <div className='cart-title'><a target='_blank' rel='noreferrer' href={VISIT_MOVIE_URL + movie.id}>{movie.title}</a></div>
            <button onClick={() => { removeFavorite(movie.id) }} className='btn btn-danger'>
                Remove
            </button>
        </div>
    )
}






const mapDispatchToProps = (dispatch) => {
    return {
        removeFavorite: (id) => { dispatch(RemoveFavoriteMovie(id)) }
    }
}

export default connect(null, mapDispatchToProps)(CartDisplay);