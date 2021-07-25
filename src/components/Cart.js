import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import './Cart.css';
import CartDisplay from './CartDisplay';



const Cart = ({favorites, location}) => {

    const myRef = useRef(null);

    const executeScroll = () => {
        if(myRef.current){
            return myRef.current.scrollIntoView({block: 'center', behavior: 'smooth'})
        }
    };

    useEffect(executeScroll, []);


    const renderItems = favorites.map(movie => {
        return (
                <CartDisplay  myRef={myRef} key={movie.id} movie={movie} location={location}/>
        )
    })

    return (
        <div className='cart-container'>
            {renderItems}
         </div>
    )
};

const mapStateToProps = (state) => {
    return {
        favorites: state.movies.favorites
    }
}




export default connect(mapStateToProps)(Cart);