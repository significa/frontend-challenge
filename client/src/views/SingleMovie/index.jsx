import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//components
import Plot from "./Plot";
import BehindTheScenes from "./BehindTheScenes";
import Rating from "./Rating";
import IMDbIcon from "../../images/2.Logos/logo-imdb.svg";
import RottenTomatoesIcon from "../../images/2.Logos/logo-rotten-tomatoes.svg";
import HeartIcon from "../../images/1.Icons/icon-heart-grey.svg";

import ArrowBack from "../../images/1.Icons/icon-arrow-grey.svg";
import "./styles.scss";

const SingleMovie = ({ match, favorites, setFavorites }) => {
  const [movieDisplayed, setMovieDisplayed] = useState(null);

  useEffect(() => {
    const id = match.params.id;
    console.log("this is the ID", id);
    const movie = async () => {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
      );

      setMovieDisplayed(data);
    };
    movie();
  }, [match.params.id]);

  const addToFavorites = () => {
    console.log(favorites);
  };

  return (
    <div>
      <div className="mt-2">
        <Link to="/">
          <img src={ArrowBack} alt="arrow back" />
        </Link>
      </div>
      {movieDisplayed && (
        <main className="d-flex">
          <div className="col-md-6 p-0">
            <div className="movie-specifications-container">{`${movieDisplayed.Runtime} · ${movieDisplayed.Year} · R`}</div>
            <h1 className="font-bold">{movieDisplayed.Title}</h1>
            <div className="d-flex mt-4">
              <Rating
                rate={movieDisplayed.imdbRating}
                rateSource="imdbRating"
                icon={IMDbIcon}
              />
              <Rating
                rate={
                  movieDisplayed.Ratings.find(
                    (item) => item.Source === "Rotten Tomatoes",
                  ).Value
                }
                rateSource="Rotten Tomatoes"
                icon={RottenTomatoesIcon}
              />
              <div
                className="d-flex align-items-center add-favorites-btn"
                onClick={addToFavorites}
              >
                <img src={HeartIcon} alt="heart icon" className="px-2" />
                <p
                  style={{ color: "#7a8c99", fontWeight: 500 }}
                  className="m-0 px-2 "
                >
                  Add to favorites
                </p>
              </div>
            </div>
            <Plot plot={movieDisplayed.Plot} />
            <section className="w-75 d-flex justify-content-between mt-5">
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
            </section>
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
