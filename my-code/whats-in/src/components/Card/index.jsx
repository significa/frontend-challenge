import React, { useState } from 'react'

import movieImage from '../../images/removeaftertest.png'
import iconLike from '../../images/icon-heart-grey.svg'
import iconLiked from '../../images/icon-heart-full.svg'

export default function MovieCard( {key, movieTitle, poster, year} ) {
    const [liked, setLiked] = useState(false)

    const handleClick = () => {
        setLiked(!liked)
    }
    return(
        <div className='movie-card' id={key}>
            <img className='movie-card__image' src={poster} alt="Movie card" />
            <div className='movie-card__overlay'>
                <button className='button-icon movie-card__like' onClick={handleClick}>
                    <img src={liked ? iconLiked : iconLike} alt="Like button" />
                </button>
                <div className='movie-card__description'>
                    <h4 className='movie-card__description__title'>{movieTitle}</h4>
                    <p className='movie-card__description__year'>{year}</p>
                </div>
            </div>
        </div>
    )
}