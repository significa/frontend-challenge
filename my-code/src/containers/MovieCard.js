import { connect } from 'react-redux'

import { toggleFavorite, getIsFavorite } from '../state/modules/favorites'
import { getMovie } from '../state/modules/movies'

import MovieCard from '../components/MovieCard'

const mapStateToProps = ({ movies, favorites }, { id }) => ({
  ...getMovie(movies, id),
  favorite: getIsFavorite(favorites, id)
})

const mapDispatchToProps = { toggleFavorite }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard)
