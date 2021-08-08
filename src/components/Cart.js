import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { removeAllFavorites } from '../redux/actions/movies/movieActions';
import './Cart.css';
import CartDisplay from './CartDisplay';



const Cart = ({ favorites, location, removeFavorites }) => {

    const myRef = useRef(null);

    const executeScroll = () => {
        if (myRef.current) {
            return myRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' })
        }
    };

    useEffect(executeScroll, []);


    const renderItems = favorites.map(movie => {
        return (
            <CartDisplay myRef={myRef} key={movie.id} movie={movie} location={location} />
        )
    })

    return (
        <div className='cart-container'>
            {renderItems}
            {
                favorites.length ?
                    (<button onClick={removeFavorites} className='btn btn-danger'>Remove All</button>)
                    :
                    null
            }

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
        removeFavorites: () => dispatch(removeAllFavorites())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Cart);