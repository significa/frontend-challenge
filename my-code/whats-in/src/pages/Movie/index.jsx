import React from 'react'
import iconBack from '../../images/icon-arrow-grey.svg'
import logoImdb from '../../images/logo-imdb.svg'
import logoRottenTomatoes from '../../images/logo-rotten-tomatoes.svg'
import iconLike from '../../images/icon-heart-grey.svg'
import iconLikeWhite from '../../images/icon-heart-white.svg'

export default function Moviepage() {
    const handleClick = () => {

    }

    return(
        <div className="grid">
            <div className="movie-info">
                <button className='movie-info__button' onClick={handleClick}>
                    <img src={iconBack} alt="Back button link" />
                </button>
                <div className='movie-info__details'>
                    <h3 className='movie-info__details--duration'>86 min</h3>
                    <h3 className='movie-info__details--year'>2014</h3>
                    <span className='movie-info__details--label'>R</span>
                </div>
                <h1 className='movie-info__title'>What We Do in the Shadows</h1>
                <div className='movie-info__rating-bar'>
                    <div className='movie-info__rating-bar__item'>
                        <img className='movie-info__rating-bar__item__image' src={logoImdb} alt="Imdb logo" />
                        <p className='movie-info__rating-bar__item__text'>7.6/10</p>
                    </div>
                    <div className='movie-info__rating-bar__item'>
                        <img className='movie-info__rating-bar__item__image--red' src={logoRottenTomatoes} alt="Imdb logo" />
                        <p className='movie-info__rating-bar__item__text'>96%</p>
                    </div>
                    <button className='movie-info__rating-bar__button'>
                        <img src={iconLike} className='movie-info__rating-bar__button__icon' alt="Add to favorite button" />
                        <img src={iconLikeWhite} className='movie-info__rating-bar__button__icon--white' alt="Add to favorite button" />
                        <p className='movie-info__rating-bar__button__text'>Add to favourites</p>
                    </button>
                </div>
            </div>
            <div className="movie-image">
                <img src="" alt="" />
            </div>
        </div>
    )
}