export const omdbApi = {
  API_KEY: "a08065ae",
  BASE_URL: "http://www.omdbapi.com/?apikey="
}

export async function searchMovies(searchTerm) {
  const url = `${omdbApi.BASE_URL}${omdbApi.API_KEY}&s=${searchTerm}`
  const res = await fetch(url)
  const data = await res.json()
  return data.Search || []
}

export async function searchSingleMovie(id) {
  const url = `${omdbApi.BASE_URL}${omdbApi.API_KEY}&i=${id}`
  const response = await fetch(url)
  return response.json()
}

export async function getFavorites() {
  const storage = localStorage.getItem("favorites")
  return storage ? JSON.parse(storage) : []
}
