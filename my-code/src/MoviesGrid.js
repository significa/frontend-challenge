import React from "react"
import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CircularProgress,
  Grid,
  Typography
} from "@material-ui/core"
import { useMovieList } from "./fetch"

const useStyles = makeStyles(theme => ({
  error: {
    marginTop: theme.spacing(2),
    color: "red"
  },
  noQuery: {
    marginTop: theme.spacing(2)
  },
  notFound: {
    marginTop: theme.spacing(2)
  },
  gridContainer: {
    margin: 0,
    marginTop: theme.spacing(2),
    height: "100%",
    width: "100%",
    maxWidth: 1200
  },
  card: {
    height: "100%"
  },
  posterWrapper: {
    height: "100%"
  }
}))

export default function MoviesGrid({ queryText, setPickedMovie }) {
  const classes = useStyles()
  const { list, isLoading, error } = useMovieList(queryText)

  if (isLoading) {
    return <CircularProgress />
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
    <Grid className={classes.gridContainer} container spacing={2}>
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

function MovieCard({ movie, onPick }) {
  const classes = useStyles()
  const { imdbID, Poster, Title, Year } = movie

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.posterWrapper} onClick={onPick}>
        <CardMedia component="img" alt="Poster" image={Poster} title={Title} />
      </CardActionArea>
    </Card>
  )
}

// Poster: "https://m.media-amazon.com/images/M/MV5BMTUwNDU0NzcwMl5BMl5BanBnXkFtZTcwNzk1NjAzNA@@._V1_SX300.jpg"
// Title: "Canadian Bacon"
// Type: "movie"
// Year: "1995"
// imdbID: "tt0109370"
