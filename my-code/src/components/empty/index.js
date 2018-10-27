import React from 'react'
import PropTypes from 'prop-types'
import imageEmpty from './empty-state.png'
import './empty.scss'

const Empty = ({ statusEmpty }) => (
  <div className={`empty ${statusEmpty}`}>
    <img src={imageEmpty} alt='Empty' />
    <h3 className='empty__title'>Movie not found</h3>
    <p className='empty__text'>Go back and do a new search</p>
  </div>
)

Empty.defaultProps = {
  statusEmpty: ''
}

Empty.propTypes = {
  statusEmpty: PropTypes.string
}

export default Empty
