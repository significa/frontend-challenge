import React, { useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "./../assets/placeholder.jpg";

function Movies(props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="movie"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        to={{
          pathname: `/${props.movie.imdbID}`,
          aboutProps: {
            searchParam: props.searchParam,
          },
        }}
      >
        <div id="movie">
          {props.movie.Poster === "N/A" ? (
            <img src={placeholder} alt="poster" width="180" />
          ) : (
            <img src={props.movie.Poster} alt="poster" width="180" />
          )}

          {hover ? (
            <>
              <div className="movie-title-container">
                <p className="movie-title">
                  {props.movie.Title}
                  <br />
                  {props.movie.Year}
                </p>
              </div>
            </>
          ) : null}
        </div>
      </Link>
    </div>
  );
}

export default Movies;
