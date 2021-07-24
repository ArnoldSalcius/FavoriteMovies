import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RemoveFavoriteMovie } from '../redux/actions/movies/movieActions';
import './Cart.css';


const CartDisplay = ({movie, removeFavorite, location, myRef}) => {

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

    },[])

    return (
        <div ref= {ref} className={highlight} key={movie.id}>
            <h2>{movie.title}</h2>
            <button onClick={() => {removeFavorite(movie.id)}}className='btn btn-danger'>
                Delete
            </button>
        </div>
    )
}






const mapDispatchToProps = (dispatch) => {
    return {
        removeFavorite: (id) => {dispatch(RemoveFavoriteMovie(id))}
    }
}

export default connect(null, mapDispatchToProps)(CartDisplay);