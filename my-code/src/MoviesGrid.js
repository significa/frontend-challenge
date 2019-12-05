import React from "react"
import { makeStyles, Grid } from "@material-ui/core"
import { Loading, Error, LogoMessage } from "./stateDescribers.js"
import { useMovieList } from "./fetch"
import MovieCard from "./MovieCard.js"

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    height: "100%",
    width: "100%",
    maxWidth: 1200
  }
}))

export default function MoviesGrid({ queryText, setPickedMovie }) {
  const classes = useStyles()
  const { list, isLoading, error } = useMovieList(queryText)

  if (isLoading) {
    return <Loading />
  }

  if (error !== null) {
    return <Error message={error} />
  }

  if (list === null) {
    return <LogoMessage message="Not a single movie in sight!" />
  }

  // As an alternative to using a placeholder for movies without Poster we just filter those out.
  // This is done just to improve application looks for this challenge.
  const filteredList = list.filter(m => m.Poster !== "N/A")

  return (
    <Grid className={classes.root} container spacing={3}>
      {filteredList.map(movie => (
        <Grid item key={movie.imdbID} xs={3} md={2}>
          <MovieCard
            movie={movie}
            onPick={() => setPickedMovie(movie.imdbID)}
          ></MovieCard>
        </Grid>
      ))}
    </Grid>
  )
}
