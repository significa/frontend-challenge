import React from 'react'
import PropTypes from 'prop-types'

import MovieCard from '../../containers/MovieCard'

import { Wrapper } from './style'

export default function SearchResults({ ids }) {
  return (
    <Wrapper>
      {ids.map(id => (
        <MovieCard key={id} id={id} />
      ))}
    </Wrapper>
  )
}

SearchResults.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired
}
