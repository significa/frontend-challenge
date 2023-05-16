import React, { useState } from 'react';
import logotype from '../../images/logo.svg'
import iconSearch from '../../images/icon-magnifier-grey.svg'
import emptyImage from '../../images/illustration-empty-state@2x.png'
import movieImage from '../../images/removeaftertest.png'
import iconLike from '../../images/icon-heart-grey.svg'
import iconLiked from '../../images/icon-heart-full.svg'

export default function Homepage() {
    const isVisible = false;
    const [liked, setLiked] = useState(false)

    const handleClick = () => {
        setLiked(!liked)
    }

    return (
        <div className="grid">
            <div className="header">
                <img src={logotype} alt="logotype" />
            </div>
            <div className='search'>
                <input className='search__input' type="text" placeholder='Search movies...'/>
                <img className='search__icon' src={iconSearch} alt="Search icon" />
            </div>
            {isVisible && (
                <div className='empty'>
                    <img className='empty__image' src={emptyImage} alt="Empty search" />
                    <h2>Don’t know what to search?</h2>
                    <p className='empty__subheader--lightgrey'>Here’s an offer you can’t refuse</p>
                </div>
            )}
            <div className='movie-card'>
                <img className='movie-card__image' src={movieImage} alt="Movie card" />
                <div className='movie-card__overlay'>
                    <button className='movie-card__like' onClick={handleClick}>
                        <img src={liked ? iconLiked : iconLike} alt="Like button" />
                    </button>
                    <div className='movie-card__description'>
                        <h4 className='movie-card__description__title'>Movie name</h4>
                        <p className='movie-card__description__year'>2018</p>
                    </div>
                </div>
            </div>
        </div>
    )
}