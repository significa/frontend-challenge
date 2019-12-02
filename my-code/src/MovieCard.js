import React, { useState } from "react"
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    width: 150,
    margin: theme.spacing(1)
  }
}))

export default function MovieCard({ movie, onPick }) {
  const classes = useStyles()
  const { imdbID, Poster, Title, Year } = movie

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={onPick}>
        <CardMedia
          component="img"
          alt="Poster"
          height="220"
          image={Poster}
          title={Title}
        />
      </CardActionArea>
    </Card>
  )
}

// Poster: "https://m.media-amazon.com/images/M/MV5BMTUwNDU0NzcwMl5BMl5BanBnXkFtZTcwNzk1NjAzNA@@._V1_SX300.jpg"
// Title: "Canadian Bacon"
// Type: "movie"
// Year: "1995"
// imdbID: "tt0109370"
