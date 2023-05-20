import React from 'react';
import { useNavigate } from 'react-router-dom';
import iconBack from '../../images/icon-arrow-grey.svg'
import logoImdb from '../../images/logo-imdb.svg'
import logoRottenTomatoes from '../../images/logo-rotten-tomatoes.svg'
import iconLike from '../../images/icon-heart-grey.svg'
import iconLikeWhite from '../../images/icon-heart-white.svg'

export default function Moviepage( {movie, isMovieLiked, handleLike, likedMovies} ) {
    const navigation = useNavigate();

    const handleNavigation = () => {
        navigation(-1)
    }

    const checkRating = () => {
        const rottenTomatoesRating = movie.Ratings.find((rating) => rating.Source === "Rotten Tomatoes");
        return rottenTomatoesRating ? rottenTomatoesRating.Value : 'N/A'
    }

    const formatDetailsList = (info) => {
        return info.split(', ').map((item) =>  <li>{item}</li>)
    }

    const handleClick = (movie) => {
        handleLike(movie)
    }

    return(
        <div className="grid">
            <div className="movie-info">
                <button className='movie-info__button' onClick={handleNavigation}>
                    <img src={iconBack} alt="Back button link" />
                </button>
                <div className='movie-info__details'>
                    <h3 className='movie-info__details__duration'>{movie?.Runtime}</h3>
                    <h3 className='movie-info__details__year'>{movie?.Year}</h3>
                    <span className='movie-info__details__label'>{movie?.Rated}</span>
                </div>
                <h1 className='movie-info__title'>{movie?.Title}</h1>
                <div className='movie-info__rating-bar'>
                    <div className='movie-info__rating-bar__item'>
                        <img className='movie-info__rating-bar__item__image' src={logoImdb} alt="Imdb logo" />
                        <p className='movie-info__rating-bar__item__text'>{movie?.imdbRating}</p>
                    </div>
                    <div className='movie-info__rating-bar__item'>
                        <img className='movie-info__rating-bar__item__image--red' src={logoRottenTomatoes} alt="Imdb logo" />
                        <p className='movie-info__rating-bar__item__text'>{checkRating()}</p>
                    </div>
                    <button onClick={() => handleClick(movie)} className={`movie-info__rating-bar__button ${isMovieLiked(movie) ? 'active' : ''}`}>
                        <img src={isMovieLiked(movie) ? iconLikeWhite : iconLike} className='movie-info__rating-bar__button__icon' alt="Add to favorite button" />
                        <img src={iconLikeWhite} className='movie-info__rating-bar__button__icon__white' alt="Add to favorite button" />
                        <p className='movie-info__rating-bar__button__text'>{isMovieLiked(movie) ? 'Added' : 'Add to favourites'}</p>
                    </button>
                    {console.log(likedMovies)}
                </div>
                <div className='movie-info__plot'>
                    <span className='movie-info__plot__title'>Plot</span>
                    <p className='movie-info__plot__text'>{movie.Plot}</p>
                </div>
                <div className='movie-info__smaller'>
                    <div className='movie-info__smaller__item'>
                        <span className='movie-info__smaller__item__title'>Cast</span>
                        <ul className='movie-info__smaller__item__list'>
                            {formatDetailsList(movie.Actors)}
                        </ul>
                    </div>
                    <div className='movie-info__smaller__item'>
                        <span className='movie-info__smaller__item__title'>Genre</span>
                        <ul className='movie-info__smaller__item__list'>
                            {formatDetailsList(movie.Genre)}
                        </ul>
                    </div>
                    <div className='movie-info__smaller__item'>
                        <span className='movie-info__smaller__item__title'>Director</span>
                        <ul className='movie-info__smaller__item__list'>
                            {formatDetailsList(movie.Director)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="movie-poster">
                <div className='movie-poster__overlay'></div>
                <img src={movie?.Poster} className='movie-poster__image' alt="Movie poster" />
            </div>
        </div>
    )
}