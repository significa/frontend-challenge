import React, { useState } from 'react'
import iconSearch from '../../images/icon-magnifier-grey.svg'
import iconLike from '../../images/icon-heart-grey.svg'
import iconLiked from '../../images/icon-heart-full.svg'
import Loading from '../../components/Loading'
import Empty from '../../components/Empty'

export default function Homepage({ handleSearch, movies, handleMovieSelection, isLoading }) {
    const handleChange = (event) => {
        handleSearch(event.target.value)
    }

    const handleLike = (e, movie) => {
        e.stopPropagation()
        setLikedMovies((prevLikedMovies) => {
            if (prevLikedMovies.find((likedMovie) => likedMovie.imdbID === movie.imdbID)) {
              return prevLikedMovies.filter((likedMovie) => likedMovie.imdbID !== movie.imdbID);
            } else {
              return [...prevLikedMovies, movie];
            }
          });
    }

    const handleSelection = (movie) => {
        handleMovieSelection(movie)
    }

    const [likedMovies, setLikedMovies] = useState([]);

    const isMovieLiked = (movie) => {
    return likedMovies.some((likedMovie) => likedMovie.imdbID === movie.imdbID);
    };
    
    return (
        <div className="grid">
            <div className='search'>
                <input onChange={handleChange} className='search__input' type="text" placeholder='Search movies...'/>
                <img className='search__icon' src={iconSearch} alt="Search icon" />
            </div>
            {isLoading ? (
                <Loading />
                ) : movies && movies.length ? (
                    movies.map((movie) => (
                    <div onClick={() => handleSelection(movie)} className="movie-card" key={movie.imdbID}>
                        <img className="movie-card__image" src={movie.Poster} alt="Movie card" />
                        <button className={`button-icon movie-card__like ${isMovieLiked(movie) ? 'liked' : ''}`} onClick={(e) => handleLike(e, movie)}>
                            <img src={isMovieLiked(movie) ? iconLiked : iconLike} alt="Like button" />
                        </button>
                        <div className="movie-card__overlay">
                        <div className="movie-card__description">
                            <h4 className="movie-card__description__title">{movie.Title}</h4>
                            <p className="movie-card__description__year">{movie.Year}</p>
                        </div>
                        </div>
                    </div>
                    ))
                ) : (
                    <Empty />
                )}
        </div>
    )
}