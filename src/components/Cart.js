import React, { useEffect} from 'react';
import {connect} from 'react-redux';

import { RemoveFavoriteMovie } from '../redux/actions/movies/movieActions';



const Cart = ({favorites, removeFavorite}) => {

    useEffect(() => {

    },[]);


    const renderItems = favorites.map(movie => {
        return (
            <div key={movie.id}>
                <h2>{movie.title}</h2>
                <button onClick={() => {
                    removeFavorite(movie.id)
                }}className='btn btn-danger'>Delete</button>
            </div>
        )
    })

    return (
        <div>
            {renderItems}
         </div>
    )
};

const mapStateToProps = (state) => {
    return {
        favorites: state.movies.favorites
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        removeFavorite: (id) => {dispatch(RemoveFavoriteMovie(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);