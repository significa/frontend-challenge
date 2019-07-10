import { searchMovies } from "./API"

const SEARCH_TERM_CHANGED = "SEARCH_TERM_CHANGED"

const initialState = {
  searchTerm: "",
  results: [],
  loading: false,
  info: {},
  fav: false,
  favorites: []
}

export const actions = {
  searchTermChanged(searchTerm) {
    return {
      type: SEARCH_TERM_CHANGED,
      searchTerm
    }
  },
  getMovies(searchTerm) {
    return {
      type: "MOVIES",
      payload: searchMovies(searchTerm)
    }
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_TERM_CHANGED: {
      return {
        ...state,
        searchTerm: action.searchTerm
      }
    }
    case "MOVIES_PENDING": {
      return {
        ...state,
        results: [],
        loading: true
      }
    }
    case "MOVIES_FULFILLED": {
      return {
        ...state,
        results: action.payload,
        loading: false
      }
    }
    case "SINGLE_MOVIE_PENDING": {
      return {
        ...state,
        loading: true,
        info: {},
        favorites: []
      }
    }
    case "SINGLE_MOVIE_FULFILLED": {
      return {
        ...state,
        loading: false,
        info: action.payload,
        favorites: action.payload
      }
    }
    default:
      return state
  }
}
