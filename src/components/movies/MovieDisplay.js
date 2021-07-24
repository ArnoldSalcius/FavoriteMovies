import React, {useState} from 'react';
import { connect } from 'react-redux';
import MovieButton from './MovieButton';

import { AddFavoriteMovie } from '../../redux/actions/movies/movieActions';
import './MovieDisplay.css';



const IMAGES_URL = 'https://image.tmdb.org/t/p/w500/';
const UNAVAILABLE_IMG = 'https://icon-library.com/images/image-unavailable-icon/image-unavailable-icon-9.jpg';
const VISIT_MOVIE_URL = 'https://www.themoviedb.org/movie/';

const MovieDisplay = ({movie}) => {

    const [isHovered, setIsHovered] = useState(false);
    
    const toggleHovered = (currentHover) => {
        setIsHovered(currentHover);
    }


    

    //Pull image from URL or use basic image Unavailable
    const moviePoster = movie.poster_path ?  IMAGES_URL + movie.poster_path : UNAVAILABLE_IMG;
    const movieBackdrop = movie.backdrop_path ? IMAGES_URL + movie.backdrop_path : UNAVAILABLE_IMG;
    const movieVisit = VISIT_MOVIE_URL + movie.id;

    //check if movie already in favorites
    //If in favorites, button should take to favorites, if not, it should add
    
    



    //Decide what to render based on isHovered value
    const renderMovie = () => {
        

        if(!isHovered){
            return (
            <div className='movie-card' onMouseEnter={() => toggleHovered(true)} onMouseLeave={() => toggleHovered(false)}>
                <img alt='Something went wrong...' src = {moviePoster} />
            </div>
            );
        }else{
            return (
            <div className='movie-card' onMouseEnter={() => toggleHovered(true)} onMouseLeave={() => toggleHovered(false)}>
                <div className='movie-title'>{movie.title}</div>
                <div className='backdrop'>
                    <img alt='movie backdrop notimage' src={movieBackdrop} />
                </div>
                
                <p>
                    {movie.overview}
                </p>
                <div className='movie-form'>
                    <a rel="noreferrer" target= '_blank' href={movieVisit}className='btn btn-primary'>Visit</a>
                    <MovieButton movie ={movie} />
                </div>
            </div>
            )
        }
    }


    return (
        renderMovie()
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieDisplay);