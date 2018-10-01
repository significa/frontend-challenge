import React from 'react'
import PropTypes from 'prop-types'

import SearchResults from '../../containers/SearchResults'
import Message from '../Message'

export default function SearchContent({
  search,
  results,
  error,
  errorMessage
}) {
  if (error) {
    return <Message title="Something went wrong" subtitle={errorMessage} />
  }

  if (!search) {
    return (
      <Message
        title="Don’t know what to search?"
        subtitle="Here’s an offer you can’t refuse"
      />
    )
  }

  if (!results) {
    return (
      <Message
        title="Nothing found"
        subtitle="Try searching for something else"
      />
    )
  }

  return <SearchResults />
}

SearchContent.propTypes = {
  search: PropTypes.bool.isRequired,
  results: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

SearchContent.defaultProps = {
  errorMessage: undefined
}
