import React from 'react';
import logotype from '../../images/logo.svg'
import iconSearch from '../../images/icon-magnifier-grey.svg'
import empty from '../../images/illustration-empty-state@2x.png'
import movieImage from '../../images/removeaftertest.png'

export default function Homepage() {
    const isVisible = false;

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
                    <img className='empty__image' src={empty} alt="Empty search" />
                    <h2>Don’t know what to search?</h2>
                    <p className='empty__subheader--lightgrey'>Here’s an offer you can’t refuse</p>
                </div>
            )}
            <div className='movie-card'>
                <img className='movie-card__image' src={movieImage} alt="Movie card" />
                <div className='movie-card__overlay'>
                    <p>testing</p>
                </div>
            </div>
        </div>
    )
}