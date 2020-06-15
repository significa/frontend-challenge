import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { REACT_APP_API_KEY } from "./../settings";
import illustration from "./../assets/illustration-empty-state.png";
import Movies from "./Movies";

function Home(props) {
  console.log("PROPS IN HOME", props);
  const api_key = REACT_APP_API_KEY;
  const [searchParam, setSearchParam] = useState("");
  const [moviesList, setMoviesList] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(true);

  const searchMovie = (e) => {
    setError(false);
    e.preventDefault();
    if ((searchParam === "") | (searchParam === undefined)) {
      setEmpty(true);
      console.log("EMPTY", empty);
    } else {
      setError(false);
      console.log("searching");
      console.log("loading is ", loading);
      console.log("error is", error);
      console.log("searchparma is", searchParam);
      setLoading(true);
      setLoading(false);

      axios
        .get(`http://www.omdbapi.com/?s=${searchParam}&apikey=${api_key}`)
        .then((res) => {
          console.log("HERE", res);

          if (res.data.Response === "True") {
            setMoviesList(res.data.Search);
            setEmpty(false);
            setLoading(false);
            console.log("there", res);
          } else {
            console.log("ERROR");
            setError(true);
          }
        })
        .catch((err) => console.log("NOT VALID STRING"));
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchParam(e.target.value);
  };

  return (
    <div className="home">
      <form onSubmit={searchMovie}>
        <input
          name="search"
          type="text"
          value={searchParam}
          onChange={handleChange}
        />
      </form>
      {loading && !error ? (
        <p>Wait</p>
      ) : error ? (
        <p>Not Found</p>
      ) : moviesList && !empty ? (
        <div id="movies-container">
          {moviesList.map((movie) => (
            <Movies key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : empty ? (
        <div class="initial-screen">
          <img src={illustration} alt="empty-state" width="350" />
          <div class="initial-screen--information">
            <p class="initial-screen--p1">Don't know what to search?</p>
            <p class="initial-screen--p2">Here's an offer you can't refuse</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Home;
