import React, { useState, useEffect } from "react";
import { useParams, Link } from "@reach/router";

import Layout from "../components/layout";
import { ButtonFavYes, ButtonFavNo, ButtonArrow } from "../components/Buttons";
import { LabelLogo, LabelRated } from "../components/Labels";

const Movie = () => {
  /* define movie Id from passed arguments */
  const params = useParams();

  /* set variables that use state */
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [favourite, setFavourite] = useState(false);

  /* function that gets movie information from api */
  const getList = async (requestUrl) => {
    try {
      let response = await fetch(requestUrl);
      let json = await response.json();
      console.log(json);
      setIsLoading(false);
      setMovie(json);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  /* TODO functions that deal with favourites persistence */
  const addFavourites = () => {
    return setFavourite(true);
  };
  const removeFavourites = () => {
    return setFavourite(false);
  };

  /* fetch movie information from the api after component has mounted */
  useEffect(() => {
    const requestUrl = encodeURI(
      `http://www.omdbapi.com/?i=${params.movieId}&apikey=7255c9dd`
    );
    setIsLoading(true);
    getList(requestUrl);
  }, [params.movieId]);

  // render
  if (params.movieId === "not-found") {
    /* render if movie wasn't found (or redirected from /movie/) */
    <Layout>
      <h1>Sorry... Movie not found!</h1>
    </Layout>;
  } else if (error || movie.Response === "False") {
    /* render if there was an error getting the data or if movieId is not correct */
    return (
      <Layout>
        <div>Error: {error ? error.message : movie.Error}</div>
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
          <div className="movie-info__duration-year-rated">
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
              <div onClick={removeFavourites}>
                <ButtonFavYes />
              </div>
            ) : (
              <div onClick={addFavourites}>
                <ButtonFavNo />
              </div>
            )}
          </div>
          <div className="movie-info__plot">
            <h3>Plot</h3>
            <p>{movie.Plot}</p>
          </div>
          <div className="movie-info__cast">
            <h3>Cast</h3>
            {Array.isArray(actors) ? (
              actors.map((actor) => <p key={actor}>{actor}</p>)
            ) : (
              <p>{movie.Actors}</p>
            )}
          </div>
          <div className="movie-info__genre">
            <h3>Genre</h3>
            {Array.isArray(genres) ? (
              genres.map((genre) => <p key={genre}>{genre}</p>)
            ) : (
              <p>{movie.Genre}</p>
            )}
          </div>
          <div className="movie-info__director">
            <h3>Director</h3>
            {Array.isArray(directors) ? (
              directors.map((director) => <p key={director}>{director}</p>)
            ) : (
              <p>{movie.Director}</p>
            )}
          </div>
          <div className="movie-info__poster">
            {movie.Poster ? <img src={movie.Poster} alt={movie.Title} /> : null}
          </div>
        </div>
      </Layout>
    );
  }
};

export default Movie;
