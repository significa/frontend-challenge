import React, {Component} from 'react';

import { getMovies } from '../API';
import MovieList from '../components/MovieList'

class MoviesPage extends Component {
    state = {
        movies: null
    };

    componentDidMount = async () => {
        const movies = await getMovies().catch(error => {
            console.log(error);
        });        
        this.setState({
            movies
        });
    }

    render(){
        const {movies} = this.state;
        return movies ? 
        <MovieList movies={movies}></MovieList> :
        <h1>Loading...</h1>;
    }
}

export default MoviesPage;