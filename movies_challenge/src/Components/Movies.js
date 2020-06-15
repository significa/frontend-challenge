import React, { useState } from "react";
import { Link } from "react-router-dom";

function Movies(props) {
  const [loading, setLoading] = useState(false);
  console.log("PROPS", props);
  return (
    <div className="movie">
      <Link to={`/${props.movie.imdbID}`}>
        <img src={props.movie.Poster} alt="poster" width="180" />
      </Link>
    </div>
  );
}

export default Movies;
