import { searchMovies, searchSingleMovie, getFavorites } from "./API"

const SEARCH_TERM_CHANGED = "SEARCH_TERM_CHANGED"
const MOVIES = "MOVIES"
const SINGLE_MOVIE = "SINGLE_MOVIE"
const FAVORITES = "FAVORITES"
const TOGGLE_FAVORITE = "TOGGLE_FAVORITE"

export const actionsMainPage = {
  searchTermChanged(searchTerm) {
    return {
      type: SEARCH_TERM_CHANGED,
      searchTerm
    }
  },
  getMovies(searchTerm) {
    return {
      type: MOVIES,
      payload: searchMovies(searchTerm)
    }
  }
}
export const actionsSingleMoviePage = {
  getSingleMovie(id) {
    return {
      type: SINGLE_MOVIE,
      payload: searchSingleMovie(id)
    }
  },
  getFavorites() {
    return {
      type: FAVORITES,
      payload: getFavorites()
    }
  },
  toggleFavorite() {
    return {
      type: TOGGLE_FAVORITE,
      favorite: true,
      payload: getFavorites()
    }
  }
}
