import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { fetchMovies } from '../redux/actions/movies/movieActions';

const SearchBar = ({fetchMovies}) => {

    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);


    //Debouncing term every 500ms to throttle API requests
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 500);
        return () => clearTimeout(timeOutId);
    },[term]);

    //Fetching every time term debounced
    useEffect(()=> {
        if(debouncedTerm.length > 3){
            fetchMovies(debouncedTerm);
        }
    }, [debouncedTerm, fetchMovies]);



    const onSubmit= (e) => {
        e.preventDefault();
        fetchMovies(term);
    }


    return (
        <form className="row g-3" onSubmit={(e) => onSubmit(e)}>
            <div className="col-10">
                <input type="text" onChange={(e) => setTerm(e.target.value)} value = {term} className="form-control" id="inputPassword2" placeholder="Search Movies..."/>
            </div>
                <div className="col-2">
                <button type="submit" className="btn btn-primary mb-3">Search</button>
            </div>
        </form >
    )

};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: (term) => {return dispatch(fetchMovies(term))}
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);