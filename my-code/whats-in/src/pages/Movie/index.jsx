import React from 'react'
import iconBack from '../../images/icon-arrow-grey.svg'
import logoImdb from '../../images/logo-imdb.svg'
import logoRottenTomatoes from '../../images/logo-rotten-tomatoes.svg'
import iconLike from '../../images/icon-heart-grey.svg'
import iconLikeWhite from '../../images/icon-heart-white.svg'
import movieImageLarge from '../../images/removeaftertest2.png'

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
                    <h3 className='movie-info__details__duration'>86 min</h3>
                    <h3 className='movie-info__details__year'>2014</h3>
                    <span className='movie-info__details__label'>R</span>
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
                <div className='movie-info__plot'>
                    <span className='movie-info__plot__title'>Plot</span>
                    <p className='movie-info__plot__text'>Viago, Deacon, and Vladislav are vampires who are finding that modern life has them struggling with the mundane - like paying rent, keeping up with the chore wheel, trying to get into nightclubs, and overcoming flatmate conflicts.</p>
                </div>
                <div className='movie-info__smaller'>
                    <div className='movie-info__smaller__item'>
                        <span className='movie-info__smaller__item__title'>Cast</span>
                        <ul className='movie-info__smaller__item__list'>
                            <li>Jemaine Clemet</li>
                            <li>Cori Gonzalez-Macuer</li>
                            <li>Taika waititi</li>
                            <li>Honny Brugh</li>
                        </ul>
                    </div>
                    <div className='movie-info__smaller__item'>
                        <span className='movie-info__smaller__item__title'>Cast</span>
                        <ul className='movie-info__smaller__item__list'>
                            <li>Comedy</li>
                            <li>Horror</li>
                        </ul>
                    </div>
                    <div className='movie-info__smaller__item'>
                        <span className='movie-info__smaller__item__title'>Cast</span>
                        <ul className='movie-info__smaller__item__list'>
                            <li>Jemaine Clement</li>
                            <li>Taika Waititi</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="movie-poster">
                <img src={movieImageLarge} className='movie-poster__image' alt="Movie poster" />
            </div>
        </div>
    )
}