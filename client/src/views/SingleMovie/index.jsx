import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//components
import Plot from "./Plot";
import BehindTheScenes from "./BehindTheScenes";

import ArrowBack from "../../images/1.Icons/icon-arrow-grey.svg";
import "./styles.scss";

const SingleMovie = ({ match }) => {
  const [movieDisplayed, setMovieDisplayed] = useState(null);

  useEffect(() => {
    const id = match.params.id;
    console.log("this is the ID", id);
    const movie = async () => {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
      );

      setMovieDisplayed(data);
      console.log(data);
    };
    console.log("this is the movie data", movie());
  }, [match.params.id]);
  return (
    <div>
      <div>
        <Link to="/">
          <img src={ArrowBack} alt="arrow back" />
        </Link>
      </div>
      {movieDisplayed && (
        <main className="d-flex">
          <div className="col-md-6 p-0">
            <div>{`${movieDisplayed.Runtime} · ${movieDisplayed.Year} · R`}</div>
            <h1 className="font-bold">{movieDisplayed.Title}</h1>
            <div>
              <div>IMDb</div>
              <div>Rotten Tomatoes</div>
              <div>Add to favorites</div>
            </div>
            <Plot plot={movieDisplayed.Plot} />
            <div className="d-flex">
              <BehindTheScenes
                header="Cast"
                headerProperites={movieDisplayed.Actors.split(",")}
              />
              <BehindTheScenes
                header="Genre"
                headerProperites={movieDisplayed.Genre.split(",")}
              />
              <BehindTheScenes
                header="Director"
                headerProperites={movieDisplayed.Director.split(",")}
              />
            </div>
          </div>
          <div className="col-md-5  p-0 ml-5">
            <img
              src={movieDisplayed.Poster}
              alt="movie poster"
              className="w-100 rounded"
            />
          </div>
        </main>
      )}
    </div>
  );
};

export default SingleMovie;
