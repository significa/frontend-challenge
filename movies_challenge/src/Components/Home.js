import React, { useState } from "react";
import axios from "axios";
import { REACT_APP_API_KEY } from "../settings/settings.js";
import illustration from "./../assets/illustration-empty-state.png";
import Movies from "./Movies";
import { Loading } from "./Loading";

function Home(props) {
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
    } else {
      setError(false);
      setLoading(false);

      axios
        .get(`http://www.omdbapi.com/?s=${searchParam}&apikey=${api_key}`)
        .then((res) => {
          if (res.data.Response === "True") {
            setMoviesList(res.data.Search);
            setEmpty(false);
            setLoading(false);
          } else {
            setError(true);
          }
        })
        .catch((err) => console.log("NOT VALID STRING"));
    }
  };

  const handleChange = (e) => {
    setSearchParam(e.target.value);
  };

  return (
    <div className="home">
      <form onSubmit={searchMovie}>
        <input
          name="search"
          type="text"
          placeholder="Search"
          value={searchParam}
          onChange={handleChange}
        />
      </form>
      {loading && !error ? (
        <Loading />
      ) : error ? (
        <p>Not Found. Search for another title.</p>
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
