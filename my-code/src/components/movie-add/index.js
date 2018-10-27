import React from 'react'
import IconSvg from '../icon-svg'
import './movie-add.scss'

const MovieAdd = ({ handleFavourites, imdb, disableFavourites }) => (
  <button className='movie-add' onClick={handleFavourites(imdb)} disabled={disableFavourites}>
    <IconSvg name={disableFavourites === false ? 'icon-heart-grey' : 'icon-heart-all'} />
    {disableFavourites === false ? 'Add to favourites' : 'Added'}
  </button>
)

export default MovieAdd
