import React from 'react'
import PropTypes from 'prop-types'
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

MovieRatings.defaultProps = {
  ratingsSvg: '',
  ratingsText: '',
  ratingsBG: ''
}

MovieRatings.propTypes = {
  ratingsSvg: PropTypes.string,
  ratingsText: PropTypes.string,
  ratingsBG: PropTypes.string
}

export default MovieRatings
