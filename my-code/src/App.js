import React, { useState } from "react"
import { makeStyles, CssBaseline } from "@material-ui/core"
import SearchBar from "./SearchBar.js"
import { LogoMessage } from "./stateDescribers.js"
import MoviesGrid from "./MoviesGrid.js"
import MoviePage from "./MoviePage.js"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden auto",
    height: "100vh",
    width: "100vw"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: 1200
  },
  gridContainer: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexGrow: 1
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
                {queryText === "" ? (
                  <LogoMessage message="Search some movies. It's free!" />
                ) : (
                  <MoviesGrid
                    queryText={queryText}
                    setPickedMovie={setPickedMovie}
                  />
                )}
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
