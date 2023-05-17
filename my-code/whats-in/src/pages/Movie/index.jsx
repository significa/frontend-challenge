import React from 'react'
import iconBack from '../../images/icon-arrow-grey.svg'

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
                    <h3 className='movie-info__duration'>86 min</h3>
                    <h3 className='movie-info__year'>2014</h3>
                    <span className='movie-info__classification'>R</span>
                </div>
                <h1>What We Do in the Shadows</h1>
            </div>
            <div className="movie-image">
                <img src="" alt="" />
            </div>
        </div>
    )
}