import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import store from '../redux/store';

import Header from './Header';
import SearchBar from './SearchBar';
import MovieList from './movies/MovieList';
import Cart from './Cart';


const App = () => {
    return (
        <Provider store = {store}>
            <div className='container'>        
                <BrowserRouter>
                        <Header />
                        <Route exact path='/'>
                            <SearchBar />
                            <MovieList/>
                        </Route>
                        <Route path='/cart' component={Cart} />
                </BrowserRouter>
            </div>
        </Provider>    
    )
}




export default App;