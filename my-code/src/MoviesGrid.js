import React from "react"
import {
  makeStyles,
  CircularProgress,
  Grid,
  Typography
} from "@material-ui/core"
import { useMovieList } from "./fetch"
import MovieCard from "./MovieCard.js"

const useStyles = makeStyles(theme => ({
  loading: {},
  error: {
    color: "red"
  },
  noQuery: {},
  notFound: {},
  gridContainer: {
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
    return <CircularProgress className={classes.error} />
  }

  if (error !== null) {
    return <Typography className={classes.error}>{error}</Typography>
  }

  if (queryText === "") {
    return (
      <Typography className={classes.noQuery}>
        Search something first!
      </Typography>
    )
  }

  if (list.length === 0) {
    return (
      <Typography className={classes.notFound}>
        Not a single movie in sight!
      </Typography>
    )
  }

  // As an alternative to using a placeholder for movies without Poster we just filter those out.
  // This is done just to improve application looks for this challenge.
  const filteredList = list.filter(m => m.Poster !== "N/A")

  return (
    <Grid className={classes.gridContainer} container spacing={3}>
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
