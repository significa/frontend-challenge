const SET_MOVIE = 'whats-in/movies/SET'

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_MOVIE:
      // Don't override full data with partial
      if (
        action.payload.partial &&
        action.payload.id in state &&
        state[action.payload.id].partial === false
      )
        return state

      return {
        ...state,
        [action.payload.id]: action.payload
      }
    default:
      return state
  }
}

export function setMovie(movie) {
  return {
    type: SET_MOVIE,
    payload: movie
  }
}

export function getMovie(movies, id) {
  return {
    ...movies[id],
    link: `/movie?id=${id}`
  }
}

export function getIsLoaded(movies, id) {
  return id in movies && movies[id].partial === false
}
