import React, { useState } from 'react'
// import emptyImage from '../../images/illustration-empty-state@2x.png'
import iconLike from '../../images/icon-heart-grey.svg'
import iconLiked from '../../images/icon-heart-full.svg'
import Search from '../../components/Search'


export default function Homepage( {onSelect} ) {
    const [movies, setMovies] = useState()
    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        setLiked(!liked)
    }

    const handleSearch = (text) => {
        fetch(`https://www.omdbapi.com/?s=${text}&apikey=22d53272`)
        .then(response => response.json())
        .then(data => setMovies(data.Search))
        .catch(error => {
            console.error(error);
        })
    }

    const handleClick = (movie) => {
        onSelect(movie)
    }

    return (
        <div className="grid">
            <Search onSearch={handleSearch} />
            {/* <div className='empty'>
                <img className='empty__image' src={emptyImage} alt="Empty search" />
                <h2>Don’t know what to search?</h2>
                <p className='empty__subheader--lightgrey'>Here’s an offer you can’t refuse</p>
            </div> */}
            {movies && (movies.map((movie) => (
                <div onClick={() => handleClick(movie)} className='movie-card'>
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
            )}
        </div>
    )
}