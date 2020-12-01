import React from "react";
import { Link } from "react-router-dom";
import HeartFavorites from "../../../components/HeartFavorites";
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
    <section className="list-container w-100 d-flex flex-wrap mt-4">
      {moviesList.map((movie) => (
        <div key={movie.imdbID} className=" p-0 mt-3 poster-container col-md-2">
          <img key={movie.imdbID} src={movie.Poster} alt={movie.Title} />

          <Link to={`/movie/${movie.imdbID}`}>
            <div className="w-100 movie-layer d-flex flex-column justify-content-between">
              {favorites.includes(movie.Title) ? (
                <HeartFavorites
                  className="align-self-end mr-3 mt-2"
                  alt="heart icon filled"
                />
              ) : (
                <HeartFavorites
                  type="white"
                  className="align-self-end mr-3 mt-2"
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
