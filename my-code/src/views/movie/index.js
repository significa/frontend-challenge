import React from 'react'
import Back from 'components/back'
import MovieImage from 'components/movie-image'
import MovieTitle from 'components/movie-title'
import MovieRuntime from 'components/movie-runtime'
import MovieRatings from 'components/movie-ratings'
import MovieAdd from 'components/movie-add'
import MoviePlot from 'components/movie-plot'
import MovieList from 'components/movie-list'
import './movies.scss'

const Movie = ({ movie, handleBack }) => (
  <main className='movie'>
    <Back handleBack={handleBack} />
    <article className='movie-info'>
      <MovieRuntime
        movieTime={movie.Runtime}
        movieYear={movie.Year} />
      <MovieTitle title={movie.Title} />
      <div className='movie-rating'>
        <MovieRatings
          ratingsSvg='logo-imdb'
          ratingsText={movie.imdbRating}
          ratingsBG='yellow' />
        <MovieRatings
          ratingsSvg='logo-rotten-tomatoes'
          ratingsText={movie.Metascore === 'N/A' ? '0%' : `${movie.Metascore}%`}
          ratingsBG='red' />
        <MovieAdd />
      </div>
      <MoviePlot plotText={movie.Plot === 'N/A' ? '' : movie.Plot} />
      <div className='movie-lists'>
        <MovieList />
        <MovieList />
        <MovieList />
      </div>
    </article>
    <section className='movie-figure'>
      <MovieImage />
    </section>
  </main>
)

export default Movie
