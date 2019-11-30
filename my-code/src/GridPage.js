import React, { useState } from "react"
import { useMovieList } from "./fetch"
import "./ListPage.css"

const apiKey = "1d66d490"

export default function GridPage(props) {
  const [queryText, setQueryText] = useState("")

  return (
    <div className="root">
      <Search onSearch={setQueryText} />
      {queryText === "" ? (
        <div>Search something first!</div>
      ) : (
        <GridList queryText={queryText} />
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

  return (
    <div>
      <div>{list.length}</div>
      <div className="grid">
        {list.map(movie => (
          <Preview movie={movie}></Preview>
        ))}
      </div>
    </div>
  )
}

function Preview(props) {
  const { imdbID, Poster, Title, Year } = props.movie

  return (
    <div className="preview-wrapper" key={imdbID}>
      <img className="preview-image" src={Poster} />
      <div className="preview-title">{Title}</div>
    </div>
  )
}

// Poster: "https://m.media-amazon.com/images/M/MV5BMTUwNDU0NzcwMl5BMl5BanBnXkFtZTcwNzk1NjAzNA@@._V1_SX300.jpg"
// Title: "Canadian Bacon"
// Type: "movie"
// Year: "1995"
// imdbID: "tt0109370"
