import React from 'react'
import PropTypes from 'prop-types'
import './movie-runtime.scss'

const MovieRuntime = ({movieTime, movieYear}) => (
  <section className='movie-runtime'>
    <p>{movieTime}</p>
    <p>{movieYear}</p>
    <div className='movie-runtime__symbol'>R</div>
  </section>
)

MovieRuntime.defaultProps = {
  movieTime: '',
  movieYear: ''
}

MovieRuntime.propTypes = {
  movieTime: PropTypes.string,
  movieYear: PropTypes.string
}

export default MovieRuntime
