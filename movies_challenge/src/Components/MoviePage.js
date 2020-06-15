import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./../assets/logo.png";
import { REACT_APP_API_KEY } from "./../settings";

function MoviePage(props) {
  const api_key = REACT_APP_API_KEY;
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({
    Actors: "",
  });
  console.log("MOVIEE", movie);

  let id = props.match.params.id;

  const searchMovie = () => {
    setLoading(true);
    axios
      .get(`http://www.omdbapi.com/?apikey=${api_key}&i=${id}`)
      .then((res) => {
        console.log("this is data", res);
        setMovie(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    searchMovie();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <button>back</button>
          <div className="movie-page">
            <div></div>
            <div className="movie-info">
              <div className="movie-info--stats">
                <p>
                  {movie.Runtime} - {movie.Year} - {movie.Rated}
                </p>
              </div>
              <h1 className="movie-info--title">{movie.Title}</h1>
              <div className="movie-info--ratings">
                <div className="movie-info--tomatoes"></div>
                <div className="movie-info--imdb"></div>
                <button className="fav">Add to favourites</button>
              </div>
              <div>
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
              <img src={movie.Poster} width="350" />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MoviePage;
