import React from 'react'
import IconSvg from '../icon-svg'
import './movie-add.scss'

const MovieAdd = () => (
  <button className='movie-add'>
    <IconSvg name='icon-heart-grey' />
    Add to favourites
  </button>
)

export default MovieAdd
