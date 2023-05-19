import React, { useState } from 'react'
import emptyImage from '../../images/illustration-empty-state@2x.png'
import iconSearch from '../../images/icon-magnifier-grey.svg'
import iconLike from '../../images/icon-heart-grey.svg'
import iconLiked from '../../images/icon-heart-full.svg'


export default function Homepage({ handleSearch, movies, handleMovieSelection }) {
    const [liked, setLiked] = useState(false)

    const handleChange = (event) => {
        handleSearch(event.target.value)
    }

    const handleLike = () => {
        setLiked(!liked)
    }

    const handleSelection = (movie) => {
        handleMovieSelection(movie)
    }
    
    return (
        <div className="grid">
            <div className='search'>
                <input onChange={handleChange} className='search__input' type="text" placeholder='Search movies...'/>
                <img className='search__icon' src={iconSearch} alt="Search icon" />
            </div>
            {movies ? (movies.map((movie) => (
                <div onClick={() => handleSelection(movie)} className='movie-card' key={movie.imdbID}>
                    <img className='movie-card__image' src={movie.Poster} alt="Movie card" />
                    <div className='movie-card__overlay'>
                        <button className='button-icon movie-card__like' onClick={handleLike}>
                            <img src={liked ? iconLiked : iconLike} alt="Like button" />
                        </button>
                        <div className='movie-card__description'>
                            <h4 className='movie-card__description__title'>{movie.Title}</h4>
                            <p className='movie-card__description__year'>{movie.Year}</p>
                        </div>
                    </div>
                </div>
                ))
            ): (
            <div className='empty'>
                <img className='empty__image' src={emptyImage} alt="Empty search" />
                <h2>Don’t know what to search?</h2>
                <p className='empty__subheader--lightgrey'>Here’s an offer you can’t refuse</p>
            </div>
            )}
        </div>
    )
}