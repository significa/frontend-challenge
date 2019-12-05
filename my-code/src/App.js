import React, { useState } from "react"
import { makeStyles, CssBaseline } from "@material-ui/core"
import blueGrey from "@material-ui/core/colors/blueGrey"
import lightGreen from "@material-ui/core/colors/lightGreen"
import SearchBar from "./SearchBar.js"
import MoviesGrid from "./MoviesGrid.js"
import MoviePage from "./MoviePage.js"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden auto",
    height: "100vh",
    width: "100vw"
    // backgroundColor: "#0a1014"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: 1200
  },
  gridContainer: {
    marginTop: theme.spacing(3)
  }
}))

export default function App() {
  const classes = useStyles()
  // pickedMovie is either null or the imdbID of a movie
  const [queryText, setQueryText] = useState("")
  const [pickedMovie, setPickedMovie] = useState(null)

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.container}>
          {pickedMovie === null ? (
            <>
              <SearchBar onSearch={setQueryText} />
              <div className={classes.gridContainer}>
                <MoviesGrid
                  queryText={queryText}
                  setPickedMovie={setPickedMovie}
                />
              </div>
            </>
          ) : (
            <MoviePage id={pickedMovie} onClose={() => setPickedMovie(null)} />
          )}
        </div>
      </div>
    </>
  )
}
