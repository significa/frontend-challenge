import React from 'react'
import PropTypes from 'prop-types'
import './movie-list.scss'

const MovieList = ({ listTitle, list }) => (
  <section className='movie-list'>
    <h3>{listTitle}</h3>
    {list !== undefined ? list.split(',').map((item, index) => <p key={index}>{item.replace(' ', '')}</p>) : ''}
  </section>
)

MovieList.defaultProps = {
  listTitle: '',
  list: ''
}

MovieList.propTypes = {
  listTitle: PropTypes.string,
  list: PropTypes.string
}

export default MovieList
