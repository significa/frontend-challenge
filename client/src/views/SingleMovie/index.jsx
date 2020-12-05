import React, { useState, useEffect } from "react";
import axios from "axios";
import ls from "local-storage";
import Plot from "./Plot";
import BehindTheScenes from "./BehindTheScenes";
import Rating from "./Rating";
import MovieNotFound from "../../components/MovieNotFound";
import ArrowBack from "./ArrowBack";
import Loader from "../../components/Loader";
import HeartFavorites from "../../components/HeartFavorites";
import moviePlaceholder from "../../images/3.Pictures/movie-placeholder.jpg";
import imdbIcon from "../../images/2.Logos/logo-imdb.svg";
import rottenTomatoesIcon from "../../images/2.Logos/logo-rotten-tomatoes.svg";

import "./styles.scss";

const SingleMovie = ({ match, favorites, setFavorites }) => {
  const [movieDisplayed, setMovieDisplayed] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movieFound, setMovieFound] = useState(false);

  useEffect(() => {
    const id = match.params.id;
    const movie = async () => {
      setIsLoading(true);

      const { data } = await axios.get(
        `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
      );
      setIsLoading(false);
      setMovieDisplayed(data);
      if (data.Response === "False") {
        setMovieFound(false);
      } else {
        setMovieFound(true);
      }
    };
    movie();
  }, [match.params.id]);

  const addToFavorites = () => {
    const movie = movieDisplayed.Title;
    if (!favorites.includes(movie))
      setFavorites((prevState) => [...prevState, movie]);
    ls.set("favoriteMovies", [...favorites, movie]);
  };

  const rottenTomatoesHasRating =
    movieFound &&
    movieDisplayed !== null &&
    movieDisplayed.Ratings.find((item) => item.Source === "Rotten Tomatoes");

  return (
    <div className="d-flex flex-column">
      <ArrowBack className="mt-3" />
      {isLoading ? (
        <Loader style={{ margin: "25% auto 0 auto" }} />
      ) : movieDisplayed !== null && movieDisplayed.Response === "False" ? (
        <MovieNotFound /> /*renders if the http request response is an object without any movie*/
      ) : (
        movieDisplayed && (
          <main className="d-flex">
            <div className="col-md-12 col-lg-6 p-0 ">
              <div className="movie-specifications-container">{`${movieDisplayed.Runtime} · ${movieDisplayed.Year} · R`}</div>
              <h1 className="font-bold">{movieDisplayed.Title}</h1>
              <div className="ratings-container d-flex mt-4">
                <Rating
                  rate={movieDisplayed.imdbRating}
                  rateSource="imdbRating"
                  icon={imdbIcon}
                />
                {rottenTomatoesHasRating && (
                  <Rating
                    rate={
                      movieDisplayed.Ratings.find(
                        (item) => item.Source === "Rotten Tomatoes",
                      ).Value || ""
                    }
                    rateSource="Rotten Tomatoes"
                    icon={rottenTomatoesIcon}
                  />
                )}
                <div
                  className={`d-flex align-items-center add-favorites-btn ${
                    favorites.includes(movieDisplayed.Title) && "added"
                  }`}
                  onClick={addToFavorites}
                >
                  <HeartFavorites
                    type={!favorites.includes(movieDisplayed.Title) && "grey"}
                    alt="heart icon"
                    className="px-2"
                  />

                  <p className="m-0 px-2 pr-3 ">
                    {favorites.includes(movieDisplayed.Title)
                      ? "Added"
                      : "Add to favorites"}
                  </p>
                </div>
              </div>
              <Plot plot={movieDisplayed.Plot} />
              <section className="w-75 d-flex justify-content-between mt-5 behind-scenes-container">
                <BehindTheScenes
                  header="Cast"
                  headerProperites={
                    movieDisplayed.Actors
                      ? movieDisplayed.Actors.split(",")
                      : ["N/A"]
                  }
                />
                <BehindTheScenes
                  header="Genre"
                  headerProperites={
                    movieDisplayed.Genre
                      ? movieDisplayed.Genre.split(",")
                      : ["N/A"]
                  }
                />
                <BehindTheScenes
                  header="Director"
                  headerProperites={
                    movieDisplayed.Director
                      ? movieDisplayed.Director.split(",")
                      : ["N/A"]
                  }
                />
              </section>
            </div>
            <div className="movie-poster col-sm-5 p-0 ml-5">
              <img
                src={
                  movieDisplayed.Poster !== "N/A"
                    ? movieDisplayed.Poster
                    : moviePlaceholder
                }
                alt="movie poster"
                className="w-100 rounded"
              />
            </div>
          </main>
        )
      )}
    </div>
  );
};

export default SingleMovie;
