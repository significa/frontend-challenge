import React from 'react'
import PropTypes from 'prop-types'
import './movie-title.scss'

const MovieTitle = ({ title }) => (
  <h1 className='movie-title'>{title}</h1>
)

MovieTitle.defaultProps = {
  title: 'Title'
}

MovieTitle.propTypes = {
  title: PropTypes.string
}

export default MovieTitle
