const omdbApi = {
  API_KEY: "a08065ae",
  BASE_URL: "http://www.omdbapi.com/?apikey="
}

function search(searchTerm) {
  const url = `${omdbApi.BASE_URL}${omdbApi.API_KEY}&s=${searchTerm}`

  return fetch(url)
    .then(response => {
      response.json()
    })
    .then(result => {
      return result || []
    })
}

export { omdbApi, search }
