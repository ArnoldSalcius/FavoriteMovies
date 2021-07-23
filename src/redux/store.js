import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import {loadState, saveState} from '../localstorage';

const preloadedFavorites = loadState();
console.log('Preloaded state');

const initialState = {
    movies: {
        movies: [],
        loading: false,
        error: '',
        favorites: preloadedFavorites || []
    }
}

const store = createStore(rootReducer, initialState ,composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    saveState(store.getState().movies.favorites);
});

export default store;