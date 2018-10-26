import React from 'react'
import PropTypes from 'prop-types'
import './movie-plot.scss'

const MoviePlot = ({ plotText }) => (
  <section className='movie-plot'>
    <h2>Plot</h2>
    <p>{plotText}</p>
  </section>
)

MoviePlot.defaultProps = {
  plotText: ''
}

MoviePlot.propTypes = {
  plotText: PropTypes.string
}

export default MoviePlot
