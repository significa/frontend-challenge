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

const Movie = () => (
  <main className='movie'>
    <Back />
    <article className='movie-info'>
      <MovieRuntime />
      <MovieTitle />
      <div className='movie-rating'>
        <MovieRatings
          ratingsSvg='logo-imdb'
          ratingsText='7.6/10'
          ratingsBG='yellow' />
        <MovieRatings
          ratingsSvg='logo-rotten-tomatoes'
          ratingsText='96%'
          ratingsBG='red' />
        <MovieAdd />
      </div>
      <MoviePlot />
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
