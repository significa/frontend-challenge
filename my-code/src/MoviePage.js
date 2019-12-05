import React, { useState } from "react"
import {
  makeStyles,
  Button,
  CircularProgress,
  Icon,
  Tooltip,
  Typography
} from "@material-ui/core"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import FavoriteIcon from "@material-ui/icons/Favorite"
import imdblogo from "./assets/imdb.png"
import rottenlogo from "./assets/rotten.png"
import { apiKey, useFetch } from "./fetch"
import { getFavorites, addFavorite, removeFavorite } from "./favorites.js"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(4),
    maxWidth: 1200
  },
  loading: {},
  error: {
    color: "red"
  },
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center"
  },
  backIcon: {
    alignSelf: "flex-start",
    marginLeft: theme.spacing(3),
    color: "#353f4c",
    cursor: "pointer"
  },
  panel: {
    width: "50%",
    padding: theme.spacing(3)
  },
  poster: {
    width: "100%",
    borderRadius: 16
  },
  info: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2)
  },
  infoItem: {
    fontSize: "16pt"
  },
  infoRated: {
    fontSize: "16pt",
    color: "#0a1014",
    backgroundColor: "#353f4c",
    borderRadius: 8,
    padding: `0 ${theme.spacing(1)}px 0 ${theme.spacing(1)}px`
  },
  infoSeparator: {
    margin: "0 8px 0 8px",
    fontSize: "16pt"
  },
  title: {
    fontSize: "45pt",
    fontWeight: "bold"
  },
  score: {
    margin: `0 ${theme.spacing(2)}px ${theme.spacing(2)}px 0`,
    display: "flex",
    justifyContent: "space-apart"
  },
  rating: {
    marginRight: theme.spacing(2),
    height: 36,
    border: "1px solid #353f4c",
    borderRadius: 8,
    display: "flex",
    alignItems: "center"
  },
  ratingLogo: {
    height: 34,
    backgroundColor: "pink",
    borderRadius: 8
  },
  ratingValue: {
    fontWeight: "bold",
    margin: theme.spacing(1)
  },
  section: {
    margin: `0 ${theme.spacing(2)}px ${theme.spacing(2)}px 0`
  },
  sectionTitle: {
    fontSize: "10pt"
  },
  sectionText: {
    fontSize: "12pt",
    whiteSpace: "pre-line"
  },
  aditionalInfo: {
    display: "flex",
    justifyContent: "space-apart",
    flexWrap: "wrap"
  }
}))

export default function GridPage({ id, onClose }) {
  const classes = useStyles()
  const movie = useFetch(
    `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`,
    "GET"
  )

  if (!movie) {
    return <CircularProgress className={classes.loading} />
  }

  if (movie.Error != null) {
    return <Typography className={classes.error}>{movie.Error}</Typography>
  }

  return (
    <div className={classes.root}>
      <Icon className={classes.backIcon} onClick={onClose}>
        <ArrowBackIcon />
      </Icon>
      <div className={classes.container}>
        <div className={classes.panel}>
          <img
            className={classes.poster}
            src={movie.Poster}
            alt={movie.title}
          />
        </div>
        <div className={classes.panel}>
          <div className={classes.info}>
            <Typography className={classes.infoItem} color="textSecondary">
              {movie.Runtime}
            </Typography>
            <span className={classes.infoSeparator}>{"\u00B7"}</span>
            <Typography className={classes.infoItem} color="textSecondary">
              {movie.Year}
            </Typography>
            <span className={classes.infoSeparator}>{"\u00B7"}</span>
            <Typography className={classes.infoRated}>{movie.Rated}</Typography>
          </div>
          <Typography className={classes.title}>{movie.Title}</Typography>
          <div className={classes.score}>
            <RatingsDisplay ratings={movie.Ratings} />
            <FavoriteButton id={movie.imdbID} />
          </div>
          <Section title={"Plot"} text={movie.Plot} />
          <div className={classes.aditionalInfo}>
            <Section title={"Cast"} text={movie.Actors.replace(/,/g, "\n")} />
            <Section title={"Genre"} text={movie.Genre.replace(/,/g, "\n")} />
            <Section title={"Director"} text={movie.Director} />
          </div>
        </div>
      </div>
    </div>
  )
}

function RatingsDisplay({ ratings }) {
  const classes = useStyles()
  const ret = []

  const imdbIndex = ratings.find(r => r.Source === "Internet Movie Database")
  if (imdbIndex > -1) {
    ret.push(
      <Tooltip
        key="imdb"
        title={ratings[imdbIndex].Source}
        children={
          <div className={classes.rating}>
            <img className={classes.ratingLogo} src={imdblogo} />
            <Typography className={classes.ratingValue}>
              {ratings[imdbIndex].Value}
            </Typography>
          </div>
        }
      />
    )
  }

  const tomatoIndex = ratings.findIndex(r => r.Source === "Rotten Tomatoes")
  if (tomatoIndex > -1) {
    ret.push(
      <Tooltip
        key="tomato"
        title={ratings[tomatoIndex].Source}
        children={
          <div className={classes.rating}>
            <img className={classes.ratingLogo} src={rottenlogo} />
            <Typography className={classes.ratingValue}>
              {ratings[tomatoIndex].Value}
            </Typography>
          </div>
        }
      />
    )
  }

  return <>{ret}</>
}

function FavoriteButton({ id }) {
  const classes = useStyles()
  const [isFavorite, setFavorite] = useState(getFavorites().includes(id))

  return (
    <Button
      variant={isFavorite ? "contained" : "outlined"}
      color="primary"
      className={classes.button}
      startIcon={isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      onClick={() => {
        if (isFavorite) {
          removeFavorite(id)
        } else {
          addFavorite(id)
        }
        setFavorite(!isFavorite)
      }}
    >
      Add to favorites
    </Button>
  )
}

function Section({ title, text }) {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <Typography className={classes.sectionTitle} color="textSecondary">
        {title}
      </Typography>
      <Typography className={classes.sectionText}>{text}</Typography>
    </div>
  )
}
//
// Actors: "John Candy, Alan Alda, Rhea Perlman, Kevin Pollak"
// Awards: "N/A"
// BoxOffice: "N/A"
// Country: "USA, Canada"
// DVD: "22 May 2001"
// Director: "Michael Moore"
// Genre: "Comedy"
// Language: "English"
// Metascore: "N/A"
// Plot: "The U.S. President, low in the opinion polls, gets talked into raising his popularity by trying to start a cold war against Canada."
// Poster: "https://m.media-amazon.com/images/M/MV5BMTUwNDU0NzcwMl5BMl5BanBnXkFtZTcwNzk1NjAzNA@@._V1_SX300.jpg"
// Production: "MGM Home Entertainment"
// Rated: "PG"
// Ratings: Array(2)
// 0: {Source: "Internet Movie Database", Value: "6.0/10"}
// 1: {Source: "Rotten Tomatoes", Value: "14%"}
// length: 2
// __proto__: Array(0)
// Released: "22 Sep 1995"
// Response: "True"
// Runtime: "91 min"
// Title: "Canadian Bacon"
// Type: "movie"
// Website: "N/A"
// Writer: "Michael Moore"
// Year: "1995"
// imdbID: "tt0109370"
// imdbRating: "6.0"
// imdbVotes: "15,195"
