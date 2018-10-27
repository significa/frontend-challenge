import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import IconSvg from '../icon-svg'
import Empty from '../empty'
import './showcase.scss'

const Showcase = ({ items, loaderShowcase, movieEmpty, handleGetMovie }) => (
  <div>
    <div className={`showcase__loader ${loaderShowcase}`} />
    <Empty statusEmpty={movieEmpty} />
    <ul className='showcase'>
      {items.map((item) =>
        <li className='showcase-item' key={item.imdbID}>
          <Link to={`/movie-${item.imdbID}`} onClick={handleGetMovie(item.imdbID)}>
            <div className='showcase-item__favorite'>
              <button>
                <IconSvg name='icon-heart-white' />
              </button>
            </div>
            <figure className='showcase-item__image'>
              <div className='showcase-item__mask' />
              <img src={item.Poster} alt={item.Title} />
            </figure>
            <h2 className='showcase-item__title'>{item.Title}</h2>
            <small className='showcase-item__date'>{item.Year}</small>
          </Link>
        </li>
      )}
    </ul>
  </div>
)

Showcase.defaultProps = {
  items: [],
  loaderShowcase: 'hide',
  movieEmpty: 'hide',
  statusEmpty: 'hide'
}

Showcase.propTypes = {
  items: PropTypes.array,
  loaderShowcase: PropTypes.string,
  movieEmpty: PropTypes.string,
  statusEmpty: PropTypes.string
}

export default Showcase
