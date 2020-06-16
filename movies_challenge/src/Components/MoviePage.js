import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { REACT_APP_API_KEY } from "./../settings";
import arrow_grey from "./../assets/icon-arrow-grey.png";
import heart_grey from "./../assets/icon-heart-grey.png";
import arrow_white from "./../assets/icon-arrow-white.png";
import heart_white from "./../assets/icon-heart-full.svg";
import logo_imdb from "./../assets/logo-imdb.svg";
import { Loading } from "./Loading";

function MoviePage(props) {
  let id = props.match.params.id;
  const api_key = REACT_APP_API_KEY;
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [hover, setHover] = useState({
    arrow: false,
  });
  const [fav, setFav] = useState({
    toggled: false,
  });

  const searchMovie = () => {
    setLoading(true);
    axios
      .get(`http://www.omdbapi.com/?apikey=${api_key}&i=${id}`)
      .then((res) => {
        setMovie(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setFav({ toggled: localStorage.getItem(id) });
    searchMovie();
  }, []);

  const handleMouseOver = () => {
    setHover({
      arrow: true,
    });
  };

  const handleMouseOut = () => {
    setHover({
      arrow: false,
    });
  };

  const addFav = () => {
    setFav({
      toggled: true,
    });
    localStorage.setItem(id, true);
  };

  const removeFav = () => {
    setFav({
      toggled: false,
    });
    localStorage.removeItem(id);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Link
            to={"/"}
            className="arrow-back"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {hover.arrow ? (
              <>
                <img
                  src={arrow_white}
                  width="30"
                  alt="arrow-back"
                  onMouseEnter={handleMouseOver}
                  onMouseLeave={handleMouseOut}
                />
              </>
            ) : (
              <>
                <img
                  src={arrow_grey}
                  width="30"
                  alt="arrow-back"
                  onMouseEnter={handleMouseOver}
                  onMouseLeave={handleMouseOut}
                />
              </>
            )}
          </Link>
          <div className="movie-page">
            <div className="movie-info">
              <div className="movie-info--stats">
                <p>
                  {movie.Runtime} · {movie.Year} ·{" "}
                  <span className="rated">{movie.Rated}</span>
                </p>
              </div>
              <h1 className="movie-info--title">{movie.Title}</h1>
              <div className="movie-info--ratings">
                <div className="movie-info--imdb">
                  <div className="movie-info--imdb_logo">
                    <img src={logo_imdb} />
                  </div>
                  <div className="movie-info--imdb_rating">
                    <p>{movie.imdbRating} / 10</p>
                  </div>
                </div>

                {fav.toggled ? (
                  <a className="fav-added" onClick={removeFav}>
                    <img src={heart_white} width="30" alt="arrow-back" />
                    <p>Added</p>
                  </a>
                ) : (
                  <a className="fav" onClick={addFav}>
                    <img src={heart_grey} width="30" alt="arrow-back" />
                    <p>Add to favourites</p>
                  </a>
                )}
              </div>
              <div className="movie-info--plot">
                <h2>Plot</h2>
                <p>{movie.Plot}</p>
              </div>
              <div className="movie-info--people">
                <div className="movie-info--people--cast">
                  <h2>Cast</h2>
                  <p>{movie.Actors}</p>
                </div>
                <div className="movie-info--people--genre">
                  <h2>Genre</h2>
                  <p>{movie.Genre}</p>
                </div>
                <div className="movie-info--people--director">
                  <h2>Director</h2>
                  <p>{movie.Director}</p>
                </div>
              </div>
            </div>
            <div className="movie-poster">
              <img src={movie.Poster} width="330" />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MoviePage;
