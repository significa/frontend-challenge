import React, { useState, useEffect } from "react";
import { useParams, Link } from "@reach/router";

import Layout from "../components/layout";
import { ButtonFavYes, ButtonFavNo, ButtonArrow } from "../components/Buttons";
import { LabelLogo, LabelRated } from "../components/Labels";
import "./Movie.css";

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const Movie = () => {
  /* define movie Id from passed arguments */
  const params = useParams();

  /* set variables that use state in the api call */
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState([]);

  /* making favourites persistent (using localStorage) */
  let favourites = localStorage.getItem("whatsInFavourites");

  const [favourite, setFavourite] = useState(() => {
    if (favourites != null) {
      favourites = favourites.split(",");
      return favourites.includes(params.movieId);
    } else {
      localStorage.setItem("whatsInFavourites", []);
      return false;
    }
  });

  /* functions that deal with favourites persistence */
  const addFavourites = () => {
    let newFav = localStorage.getItem("whatsInFavourites");
    newFav = newFav.split(",");
    newFav.push(params.movieId);
    newFav = newFav.join(",");
    localStorage.setItem("whatsInFavourites", newFav);
    return setFavourite(true);
  };
  const removeFavourites = () => {
    let remFav = localStorage.getItem("whatsInFavourites");
    remFav = remFav.split(",");
    remFav.splice(remFav.indexOf(params.movieId), 1);
    remFav = remFav.join(",");
    localStorage.setItem("whatsInFavourites", remFav);
    return setFavourite(false);
  };

  /* fetch movie information from the api after component has mounted */
  useEffect(() => {
    let mounted = true;
    /* function that gets movie information from api */
    const getList = async (requestUrl) => {
      try {
        let response = await fetch(requestUrl);
        let json = await response.json();
        /* console.log(json); */
        if (mounted) {
          setIsLoading(false);
          setMovie(json);
        }
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };

    const requestUrl = encodeURI(
      `http://www.omdbapi.com/?i=${params.movieId}&apikey=${API_KEY}`
    );
    setIsLoading(true);
    getList(requestUrl);

    return () => (mounted = false);
  }, [params.movieId]);

  // rendering
  if (params.movieId === "not-found") {
    /* render if movie wasn't found (or redirected from /movie/) */
    return (
      <Layout>
        <h1>
          Sorry... Movie not found! {` `}
          <Link to="/">Try again</Link>
        </h1>
      </Layout>
    );
  } else if (error || movie.Response === "False") {
    /* render if there was an error getting the data or if movieId is not correct */
    return (
      <Layout>
        <div>
          Error: {error ? error.message : movie.Error}{" "}
          <Link to="/">Try again</Link>
        </div>
      </Layout>
    );
  } else if (isLoading) {
    /* render if data is loading */
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  } else {
    /* get rotten tomatoes rating */
    let rottenRating = null;
    let ratings = movie.Ratings;
    if (ratings) {
      Object.keys(ratings).forEach((key) =>
        ratings[key].Source === "Rotten Tomatoes"
          ? (rottenRating = ratings[key].Value)
          : null
      );
    }

    /* turn strings of actors, genres and directors into arrays so they can be treated as list items */
    let actors = movie.Actors;
    if (typeof actors == "string") {
      actors = actors.split(", ");
    }
    let genres = movie.Genre;
    if (typeof genres == "string") {
      genres = genres.split(", ");
    }
    let directors = movie.Director;
    if (typeof directors == "string") {
      directors = directors.split(", ");
    }

    /* render movie information */
    return (
      <Layout>
        <Link to="/">
          <ButtonArrow />
        </Link>
        <div className="movie-info">
          <div className="movie-info__duration-year-rated grey">
            {movie.Runtime} &middot; {movie.Year} &middot;{" "}
            <LabelRated rated={movie.Rated} />
          </div>
          <h1 className="movie-info__title">{movie.Title}</h1>
          <div className="movie-info__labels">
            {movie.imdbRating ? (
              <LabelLogo imdb rating={movie.imdbRating} />
            ) : null}
            {rottenRating ? <LabelLogo rotten rating={rottenRating} /> : null}
            {favourite ? (
              <div
                className="movie-info__labels__btn"
                onClick={removeFavourites}
              >
                <ButtonFavYes />
              </div>
            ) : (
              <div className="movie-info__labels__btn" onClick={addFavourites}>
                <ButtonFavNo />
              </div>
            )}
          </div>
          <div className="movie-info__plot">
            <h3 className="grey">Plot</h3>
            <p>{movie.Plot}</p>
          </div>
          <div className="movie-info__cast">
            <h3 className="grey">Cast</h3>
            {Array.isArray(actors) ? (
              actors.map((actor) => <p key={actor}>{actor}</p>)
            ) : (
              <p>{movie.Actors}</p>
            )}
          </div>
          <div className="movie-info__genre">
            <h3 className="grey">Genre</h3>
            {Array.isArray(genres) ? (
              genres.map((genre) => <p key={genre}>{genre}</p>)
            ) : (
              <p>{movie.Genre}</p>
            )}
          </div>
          <div className="movie-info__director">
            <h3 className="grey">Director</h3>
            {Array.isArray(directors) ? (
              directors.map((director) => <p key={director}>{director}</p>)
            ) : (
              <p>{movie.Director}</p>
            )}
          </div>
          <div className="movie-info__poster">
            {movie.Poster !== "N/A" ? (
              <img src={movie.Poster} alt={movie.Title} />
            ) : null}
          </div>
        </div>
      </Layout>
    );
  }
};

export default Movie;
