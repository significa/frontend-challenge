import React from 'react'
import PropTypes from 'prop-types'

import MovieContent from '../../containers/MovieContent'
import Message from '../Message'

export default function Movie({ loaded, error, errorMessage }) {
  if (error) {
    return <Message title="Something went wrong" subtitle={errorMessage} />
  }

  if (!loaded) return null

  return <MovieContent />
}

Movie.propTypes = {
  loaded: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

Movie.defaultProps = {
  errorMessage: undefined
}
