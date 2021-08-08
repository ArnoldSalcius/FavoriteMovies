import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_REQUEST, ADD_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE, REMOVE_ALL_FAVORITES } from "./movieTypes"

const initialState = {
    movies: [],
    loading: false,
    error: '',
    favorites: []
}


const movieReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                movies: action.payload
            }
        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                movies: [],
                error: action.payload,
                loading: false
            }
        case ADD_FAVORITE_MOVIE:
            //Check if movie ID already exists, if it does, do nothing...

            // MAYBE return err message to display later **********************************
            const exists = state.favorites.find((movie) => movie.id === action.payload.id);
            if (exists) {
                return state
            }

            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }

        case REMOVE_FAVORITE_MOVIE:

            return {
                ...state,
                favorites: state.favorites.filter(movie => movie.id !== action.payload)
            }
        case REMOVE_ALL_FAVORITES:
            return {
                ...state,
                favorites: []
            }
        default:
            return state
    }
}

export default movieReducer;