import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import store from '../redux/store';

import Header from './Header';
import SearchBar from './SearchBar';
import MovieList from './movies/MovieList';
import Cart from './Cart';
import './App.css'


const App = () => {
    return (
        <Provider store = {store}>
                <BrowserRouter>
                    <Header />
                    <div className='container'>        

                        <Route exact path='/'>
                            <SearchBar />
                            <MovieList/>
                        </Route>
                        <Route path='/cart' component={Cart} />
                    </div>
                </BrowserRouter>
        </Provider>    
    )
}




export default App;