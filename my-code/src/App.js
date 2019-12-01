import React, { useState } from "react"
import "./App.css"
import GridPage from "./GridPage.js"
import MoviePage from "./MoviePage.js"

function App() {
  // pickedMovie is set to the movie's imdbID
  const [pickedMovie, setPickedMovie] = useState(null)

  return (
    <div className="App">
      {pickedMovie === null ? (
        <GridPage setPickedMovie={setPickedMovie} />
      ) : (
        <MoviePage id={pickedMovie} onClose={() => setPickedMovie(null)} />
      )}
    </div>
  )
}

export default App
