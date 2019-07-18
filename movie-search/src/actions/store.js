import { searchMovies, searchSingleMovie, getFavorites } from "../API"
import Actions from "./actions"

/**
  Action creators
 */
export const actionsMainPage = {
  searchTermChanged(searchTerm) {
    return {
      type: Actions.SEARCH_TERM_CHANGED,
      searchTerm
    }
  },
  getMovies(searchTerm) {
    return {
      type: Actions.MOVIES,
      payload: searchMovies(searchTerm)
    }
  }
}

export const actionsSingleMoviePage = {
  getSingleMovie(id) {
    return {
      type: Actions.SINGLE_MOVIE,
      payload: searchSingleMovie(id)
    }
  },
  getFavorites() {
    return {
      type: Actions.FAVORITES,
      payload: getFavorites()
    }
  },
  toggleFavorite() {
    return {
      type: Actions.TOGGLE_FAVORITE,
      favorite: true,
      payload: getFavorites()
    }
  },
  addFavorite(id) {
    return {
      type: Actions.ADD_FAVORITE,
      id
    }
  }
}
