import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../redux/actions/movies/movieActions';
import MovieDisplay from './MovieDisplay';
import './MovieList.css';
//class component just for practice

class MovieList extends React.Component {


    //DELETE THIS


    renderMovies() {
        return this.props.movies.map((movie) => {
            return <MovieDisplay key={movie.id} movie={movie} />
        });

    }

    componentDidMount() {

        //Initially fetching popular movies
        this.props.fetchInitial();

    }

    render() {
        return (
            <div className='movie-list'>
                {this.renderMovies()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitial: () => dispatch(fetchMovies(null, 1, true))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);