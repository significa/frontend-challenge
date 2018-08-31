// http://www.omdbapi.com/?i=tt3896198&apikey=5c129d0b
const API_KEY = '&apikey=5c129d0b' //should be on an .env
const URL = 'http://www.omdbapi.com/?'

export const movieSearch = (search) => {
    return fetch(`${URL}s=${search}${API_KEY}`)
        .then(res => res.json())  
}

export const movieDetails = (id) => {
    return fetch(`${URL}i=${id}${API_KEY}`)
        .then(res => res.json())
}