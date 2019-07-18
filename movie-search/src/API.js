export const omdbApi = {
  API_KEY: process.env.REACT_APP_API_KEY,
  BASE_URL: "http://www.omdbapi.com/?apikey="
}

export async function searchMovies(searchTerm) {
  const url = `${omdbApi.BASE_URL}${omdbApi.API_KEY}&s=${searchTerm}`
  const data = await fetch(url).then(res => res.json())
  
  return data.Search || []
}

export async function searchSingleMovie(id) {
  const url = `${omdbApi.BASE_URL}${omdbApi.API_KEY}&i=${id}`
  const data = await fetch(url).then(res => res.json())
  
  return data || []
}

export async function getFavorites() {
  const storage = localStorage.getItem("favorites")
  return storage ? JSON.parse(storage) : []
}
