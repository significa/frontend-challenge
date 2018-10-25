import React from 'react'
import IconSvg from '../icon-svg'
import './movie-ratings.scss'

const MovieRatings = ({ ratingsSvg, ratingsText, ratingsBG }) => (
  <section className='ratings'>
    <figure className={`ratings__image ${ratingsBG}`}>
      <IconSvg name={ratingsSvg} />
    </figure>
    <p>{ratingsText}</p>
  </section>
)

export default MovieRatings
