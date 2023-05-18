import React, { useState, useEffect } from 'react'
import emptyImage from '../../images/illustration-empty-state@2x.png'
// import movieImage from '../../images/removeaftertest.png'
// import iconLike from '../../images/icon-heart-grey.svg'
// import iconLiked from '../../images/icon-heart-full.svg'

import Search from '../../components/Search'

// const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=22d53272'

export default function Homepage() {
    const [liked, setLiked] = useState(false)
    const [searchText, setSearchText] = useState('')

    const handleClick = () => {
        setLiked(!liked)
    }

    const handleSearch = (text) => {
        console.log(text)
    }

    return (
        <div className="grid">
            <Search onSearch={handleSearch} />
            
            <div className='empty'>
                <img className='empty__image' src={emptyImage} alt="Empty search" />
                <h2>Don’t know what to search?</h2>
                <p className='empty__subheader--lightgrey'>Here’s an offer you can’t refuse</p>
            </div>
            {/* <div className='movie-card'>
                <img className='movie-card__image' src={movieImage} alt="Movie card" />
                <div className='movie-card__overlay'>
                    <button className='button-icon movie-card__like' onClick={handleClick}>
                        <img src={liked ? iconLiked : iconLike} alt="Like button" />
                    </button>
                    <div className='movie-card__description'>
                        <h4 className='movie-card__description__title'>Movie name</h4>
                        <p className='movie-card__description__year'>2018</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}