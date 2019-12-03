import React, { useState, useEffect } from "react"
import { makeStyles, IconButton, Paper, Typography } from "@material-ui/core"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import FavoriteIcon from "@material-ui/icons/Favorite"
import { getFavorites, addFavorite, removeFavorite } from "./favorites.js"

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
    fontSize: "16pt",
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
  const [isFavorite, setFavorite] = useState(getFavorites().includes(imdbID))

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
        onClick={() => {
          if (isFavorite) {
            removeFavorite(imdbID)
          } else {
            addFavorite(imdbID)
          }
          setFavorite(!isFavorite)
        }}
      >
        {favIcon}
      </IconButton>
    </Paper>
  )
}
