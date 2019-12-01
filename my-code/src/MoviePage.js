import React, { useState } from "react"
import { apiKey, useFetch } from "./fetch"
import "./MoviePage.css"

export default function GridPage({ id, onClose }) {
  const movie = useFetch(
    `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`,
    "GET"
  )

  if (!movie) {
    return <div>Loading...</div>
  }

  if (movie.Error != null) {
    return <div>{movie.Error}</div>
  }

  return (
    <div className="root">
      <img src={movie.Poster} />
      <div>{movie.Title}</div>
      <div>{movie.Plot}</div>
      <div>{movie.Actors}</div>
      <button onClick={onClose}>back</button>
    </div>
  )
}
//
// Actors: "John Candy, Alan Alda, Rhea Perlman, Kevin Pollak"
// Awards: "N/A"
// BoxOffice: "N/A"
// Country: "USA, Canada"
// DVD: "22 May 2001"
// Director: "Michael Moore"
// Genre: "Comedy"
// Language: "English"
// Metascore: "N/A"
// Plot: "The U.S. President, low in the opinion polls, gets talked into raising his popularity by trying to start a cold war against Canada."
// Poster: "https://m.media-amazon.com/images/M/MV5BMTUwNDU0NzcwMl5BMl5BanBnXkFtZTcwNzk1NjAzNA@@._V1_SX300.jpg"
// Production: "MGM Home Entertainment"
// Rated: "PG"
// Ratings: Array(2)
// 0: {Source: "Internet Movie Database", Value: "6.0/10"}
// 1: {Source: "Rotten Tomatoes", Value: "14%"}
// length: 2
// __proto__: Array(0)
// Released: "22 Sep 1995"
// Response: "True"
// Runtime: "91 min"
// Title: "Canadian Bacon"
// Type: "movie"
// Website: "N/A"
// Writer: "Michael Moore"
// Year: "1995"
// imdbID: "tt0109370"
// imdbRating: "6.0"
// imdbVotes: "15,195"
