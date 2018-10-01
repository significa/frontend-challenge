import { connect } from 'react-redux'
import { goBack } from 'connected-react-router'

import { toggleFavorite, getIsFavorite } from '../state/modules/favorites'
import { getMovie } from '../state/modules/movies'
import getQueryParam from '../utils/get-query-param'

import MovieContent from '../components/MovieContent'

const mapStateToProps = ({ router, movies, favorites }) => {
  const id = getQueryParam(router.location.search, 'id')

  return {
    ...getMovie(movies, id),
    favorite: getIsFavorite(favorites, id)
  }
}

const mapDispatchToProps = { goBack, toggleFavorite }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContent)
