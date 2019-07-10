const moviePageInitialState = {
  info: {},
  fav: false,
  favorites: [],
  loading: false
}

export default function moviePage(state = moviePageInitialState, action) {
  switch (action.type) {
    case "SINGLE_MOVIE_PENDING": {
      return {
        ...state,
        loading: true
      }
    }
    case "SINGLE_MOVIE_FULFILLED": {
      return {
        ...state,
        loading: false,
        info: action.payload
      }
    }
    case "FAVORITES_PENDING": {
      return {
        ...state,
        loading: true
      }
    }
    case "FAVORITES_FULFILLED": {
      return {
        ...state,
        loading: false,
        favorites: action.payload
      }
    }
    default:
      return state
  }
}
