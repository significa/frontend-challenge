import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const MovieNotFound = () => {
  return (
    <div className="movie-not-found font-medium-high d-flex justify-content-center mt-5">
      <p>
        Movie Not Found, go back to the{" "}
        <Link to="/" style={{ textDecoration: "none" }}>
          Homepage
        </Link>
      </p>
    </div>
  );
};

export default MovieNotFound;
