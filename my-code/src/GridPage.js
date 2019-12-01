import React, { useState } from "react"
import { apiKey, useMovieList } from "./fetch"
import "./GridPage.css"

export default function GridPage(props) {
  const [queryText, setQueryText] = useState("")

  return (
    <div className="root">
      <Search onSearch={setQueryText} />
      {queryText === "" ? (
        <div>Search something first!</div>
      ) : (
        <GridList queryText={queryText} setPickedMovie={props.setPickedMovie} />
      )}
    </div>
  )
}

function Search(props) {
  const [searchValue, setSearchValue] = useState("")

  return (
    <div>
      <div>Can i haz bacon</div>
      <input
        value={searchValue}
        onChange={ev => setSearchValue(ev.currentTarget.value)}
      />
      <button onClick={() => props.onSearch(searchValue)}>Click!</button>
    </div>
  )
}

function GridList(props) {
  const { list, isLoading, error } = useMovieList(props.queryText)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error !== null) {
    return <div>{error}</div>
  }

  if (list.length === 0) {
    return <div>Not a single movie in sight!</div>
  }

  return (
    <div>
      <div>{list.length}</div>
      <div className="grid">
        {list.map(movie => (
          <Preview
            key={movie.imdbID}
            movie={movie}
            pick={() => props.setPickedMovie(movie.imdbID)}
          ></Preview>
        ))}
      </div>
    </div>
  )
}

function Preview(props) {
  const { imdbID, Poster, Title, Year } = props.movie

  return (
    <div className="preview-wrapper">
      <img className="preview-image" src={Poster} onClick={props.pick} />
      <div className="preview-title">{Title}</div>
    </div>
  )
}

// Poster: "https://m.media-amazon.com/images/M/MV5BMTUwNDU0NzcwMl5BMl5BanBnXkFtZTcwNzk1NjAzNA@@._V1_SX300.jpg"
// Title: "Canadian Bacon"
// Type: "movie"
// Year: "1995"
// imdbID: "tt0109370"
