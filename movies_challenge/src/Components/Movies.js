import React, { useState } from "react";
import { Link } from "react-router-dom";

function Movies(props) {
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false);

  console.log("PROPS from MOVIES", props);
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
          <img src={props.movie.Poster} alt="poster" width="180" />
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
