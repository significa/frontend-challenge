import { search } from "./API"

const SEARCH_TERM_CHANGED = "SEARCH_TERM_CHANGED"

const initialState = {
  searchTerm: "",
  results: [],
  loading: false
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
      type: "Movies",
      payload: search(searchTerm)
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
    default:
      return state
  }
}
