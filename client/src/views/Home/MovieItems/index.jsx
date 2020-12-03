import React from "react";
import { Link } from "react-router-dom";
import HeartFavorites from "../../../components/HeartFavorites";
import MoviePlaceholder from "../../../images/3.Pictures/movie-placeholder.jpg";
import "./styles.scss";

const MovieHeader = ({ movie }) => {
  return (
    <div className="ml-3">
      <h6>{movie.Title}</h6>
      <p>{movie.Year}</p>
    </div>
  );
};

const MovieItem = ({ moviesList, favorites }) => {
  return (
    <section className="list-container w-100 d-flex flex-wrap mt-4 pb-5">
      {moviesList.map((movie) => (
        <div
          key={movie.imdbID}
          className=" p-0 mt-3 poster-container col-sm-4 col-md-3 col-lg-2 px-2"
        >
          <img
            key={movie.imdbID}
            src={
              !movie.Poster || movie.Poster !== "N/A"
                ? movie.Poster
                : MoviePlaceholder
            }
            alt={movie.Title}
          />
          {favorites.includes(movie.Title) && (
            <HeartFavorites
              className="heart-full align-self-end mr-3 mt-2"
              alt="heart icon filled"
            />
          )}
          <Link to={`/movie/${movie.imdbID}`}>
            <div className="movie-layer d-flex flex-column justify-content-between ml-2">
              {favorites.includes(movie.Title) ? (
                <HeartFavorites
                  className="align-self-end mr-2 mt-2"
                  alt="heart icon filled"
                />
              ) : (
                <HeartFavorites
                  type="white"
                  className="align-self-end mr-2 mt-2"
                  alt="heart icon unfilled"
                />
              )}
              <MovieHeader movie={movie} />
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default MovieItem;
