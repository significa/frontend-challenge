import React from 'react'
import PropTypes from 'prop-types'
import './movie-image.scss'

const MovieImage = ({ imageURl, imageAlt }) => (
  <figure className='movie-image'>
    <img src={imageURl} alt={imageAlt} />
  </figure>
)

MovieImage.defaultProps = {
  imageURl: '',
  imageAlt: ''
}

MovieImage.propTypes = {
  imageURl: PropTypes.string,
  imageAlt: PropTypes.string
}

export default MovieImage
