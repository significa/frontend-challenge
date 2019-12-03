import React, { useState } from "react"
import { makeStyles, IconButton, Paper, Typography } from "@material-ui/core"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import FavoriteIcon from "@material-ui/icons/Favorite"

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    height: "100%",
    borderRadius: 12
  },
  poster: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    borderRadius: 12
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "inherit",
    width: "100%",
    padding: theme.spacing(2),
    pointerEvents: "none",
    borderRadius: 12,
    backgroundColor: "black",
    opacity: 0.8
  },
  overlayTitle: {
    color: "white",
    fontSize: "20pt",
    fontWeight: "bold"
  },
  overlayYear: {
    color: "white",
    fontSize: "16pt",
    fontWeight: "medium"
  },
  overlayFavoriteIconButton: {
    pointerEvents: "auto",
    position: "absolute",
    bottom: 0,
    right: 0
  },
  overlayFavoriteBorderIcon: {
    color: "white",
    "&:hover": {
      color: "#ff0066"
    }
  },
  overlayFavoriteIcon: {
    color: "#ff0066"
  }
}))

export default function MovieCard({ movie, onPick }) {
  const classes = useStyles()
  const { imdbID, Poster, Title, Year } = movie
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setFavorite] = useState(false)

  let favIcon = null
  if (isFavorite) {
    favIcon = <FavoriteIcon className={classes.overlayFavoriteIcon} />
  } else if (isHovered) {
    favIcon = (
      <FavoriteBorderIcon className={classes.overlayFavoriteBorderIcon} />
    )
  }

  return (
    <Paper
      className={classes.root}
      elevation={12}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className={classes.poster}
        onClick={onPick}
        src={Poster}
        alt="Poster"
      />
      {isHovered && (
        <div className={classes.overlay}>
          <Typography className={classes.overlayTitle}>{Title}</Typography>
          <Typography className={classes.overlayYear}>{Year}</Typography>
        </div>
      )}
      <IconButton
        className={classes.overlayFavoriteIconButton}
        onClick={() => setFavorite(!isFavorite)}
      >
        {favIcon}
      </IconButton>
    </Paper>
  )
}

// Poster: "https://m.media-amazon.com/images/M/MV5BMTUwNDU0NzcwMl5BMl5BanBnXkFtZTcwNzk1NjAzNA@@._V1_SX300.jpg"
// Title: "Canadian Bacon"
// Type: "movie"
// Year: "1995"
// imdbID: "tt0109370"
