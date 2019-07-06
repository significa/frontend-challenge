import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Movie from './Movie';

const MovieList = ({movies}) => (    
    <ul className="movies">
        {
            movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                        <Movie movie={movie} />
                    </Link>
                </li>
            ))
        }
    </ul>
);


MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    })).isRequired
};


export default MovieList;