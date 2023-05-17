import React from 'react'
import iconBack from '../../images/icon-arrow-grey.svg'
import logoImdb from '../../images/logo-imdb.svg'

export default function Moviepage() {
    const handleClick = () => {

    }

    return(
        <div className="grid">
            <div className="movie-info">
                <button className='button-icon' onClick={handleClick}>
                    <img src={iconBack} alt="Back button link" />
                </button>
                <div className='movie-info__details'>
                    <h3 className='movie-info__details--duration'>86 min</h3>
                    <h3 className='movie-info__details--year'>2014</h3>
                    <span className='movie-info__details--label'>R</span>
                </div>
                <h1 className='movie-info__title'>What We Do in the Shadows</h1>
                <div className='movie-info__rating-bar'>
                    <div className='movie-info__rating-bar--item'>
                        <img className='movie-info__rating-bar--item__image' src={logoImdb} alt="Imdb logo" />
                        <p className='movie-info__rating-bar--item__text'>7.6/10</p>
                    </div>
                </div>
            </div>
            <div className="movie-image">
                <img src="" alt="" />
            </div>
        </div>
    )
}