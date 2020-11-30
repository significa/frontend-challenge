import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowBack from "../../images/1.Icons/icon-arrow-grey.svg";

const SingleMovie = () => {
  const [movieDisplayed, setMovieDisplayed] = useState(null);
  return (
    <main>
      <div>
        <Link to="/">
          <img src={ArrowBack} alt="arrow back" />
        </Link>
      </div>
    </main>
  );
};

export default SingleMovie;
