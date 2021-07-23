import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_REQUEST, ADD_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE } from "./movieTypes"
import tmdb from "../../../tmdb";


export const fetchMoviesRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST,
    }
}


export const fetchMoviesSuccess = (movies) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies

    }
}

export const fetchMoviesFailure = (error) => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: error
    }
};

export const AddFavoriteMovie = (movie) => {
    return {
        type: ADD_FAVORITE_MOVIE,
        payload: movie
    }
}

export const RemoveFavoriteMovie = (movieID) => {
    return {
        type: REMOVE_FAVORITE_MOVIE,
        payload: movieID
    }
}


export const fetchMovies = (query, page = 1, initial) => async(dispatch) => {

    dispatch(fetchMoviesRequest());
    //if initial fetch preload with list with popular movies
    const endpoint = initial ? '/movie/popular' : '/search/movie';
    try {
        const result = await tmdb.get(endpoint, {params: {query, page}});
        const movies = result.data.results;
        dispatch(fetchMoviesSuccess(movies));
    }catch(err){
        dispatch(fetchMoviesFailure(err.message));
    }
}

