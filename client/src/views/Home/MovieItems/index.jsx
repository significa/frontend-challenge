import React from "react";
import { Link } from "react-router-dom";
import HeartIconGrey from "../../../images/1.Icons/icon-heart-grey.svg";
import HeartIconFull from "../../../images/1.Icons/icon-heart-full.png";
import "./styles.scss";

const MovieItem = ({ moviesList }) => {
  return (
    <section className="list-container w-100 d-flex flex-wrap mt-4">
      {moviesList.map((movie) => (
        <>
          <div
            key={movie.imdbID}
            className=" p-0 mt-3 poster-container col-md-2"
          >
            <img key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
            <Link to={`/movie/${movie.imdbID}`}>
              <div className="w-100 movie-layer">
                <img src={HeartIconGrey} alt="heart icon unfilled" />
                <h6>{movie.Title}</h6>
                <p>{movie.Year}</p>
              </div>
            </Link>
          </div>
        </>
      ))}
    </section>
  );
};

export default MovieItem;
