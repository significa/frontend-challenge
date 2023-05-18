import React, { useState } from 'react'
import emptyImage from '../../images/illustration-empty-state@2x.png'

import Search from '../../components/Search'
import MovieCard from '../../components/Card'


export default function Homepage() {
    const [movies, setMovies] = useState()

    const handleSearch = (text) => {
        fetch(`https://www.omdbapi.com/?s=${text}&apikey=22d53272`)
        .then(response => response.json())
        .then(data => setMovies(data.Search))
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div className="grid">
            <Search onSearch={handleSearch} />
            
            {/* <div className='empty'>
                <img className='empty__image' src={emptyImage} alt="Empty search" />
                <h2>Don’t know what to search?</h2>
                <p className='empty__subheader--lightgrey'>Here’s an offer you can’t refuse</p>
            </div> */}
            {movies && (
                movies.map((movie) => (
                    <>
                    {console.log(movie)}
                    <MovieCard key={movie.imdbID} movieTitle={movie.Title} poster={movie.Poster} year={movie.Year}/>
                    </>
                ))
            )}
        </div>
    )
}