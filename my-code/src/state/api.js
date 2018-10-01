import { CANCEL } from 'redux-saga'

const API_KEY = process.env.API_KEY;
const API_URL = `https://private.omdbapi.com/?type=movie&v=1&apikey=${API_KEY}`

function splitString(str) {
  return str && str.split(',').map(s => s.trim())
}

function mapMovie(movie) {
  const rotten =
    movie.Ratings &&
    movie.Ratings.find(({ Source }) => Source === 'Rotten Tomatoes')

  return {
    title: movie.Title,
    id: movie.imdbID,
    poster: movie.Poster === 'N/A' ? undefined : movie.Poster,
    year: movie.Year,
    runtime: movie.Runtime,
    rated: movie.Rated,
    imdbRating: movie.imdbRating,
    rottenRating: rotten && rotten.Value,
    plot: movie.Plot,
    actors: splitString(movie.Actors),
    genres: splitString(movie.Genre),
    directors: splitString(movie.Director)
  }
}

/**
 * Fetch URL as json, with error handling and abort handler
 */
function get(url) {
  const controller = new AbortController()

  const req = fetch(url, { signal: controller.signal })
    .then(res => {
      if (!res.ok) {
        return res.json().then(({ Error: error }) => {
          throw new Error(error)
        })
      }

      return res.json()
    })
    .then(res => {
      // Sometimes returns 200 on errors
      if (res.Error) throw new Error(res.Error)

      return res
    })

  // Enable redux-saga to cancel request
  req[CANCEL] = () => controller.abort()

  return req
}

export function* search(string) {
  try {
    const res = yield get(`${API_URL}&s=${string}`)

    return res.Search.filter(
      // Remove duplicates
      ({ imdbID }, index, movies) =>
        movies.findIndex(movie => movie.imdbID === imdbID) === index
    ).map(movie => mapMovie(movie))
  } catch (err) {
    // No results should not be an error
    if (err.message === 'Movie not found!') return []

    throw err
  }
}

export function* getMovie(id) {
  const movie = yield get(`${API_URL}&i=${id}`)

  return mapMovie(movie)
}
