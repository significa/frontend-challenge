import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { REACT_APP_API_KEY } from "./../settings";
import illustration from "./../assets/illustration-empty-state.png";

function Home() {
  const api_key = REACT_APP_API_KEY;
  const [searchParam, setSearchParam] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchMovie = (e) => {
    e.preventDefault();
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
          setLoading(false);
          console.log("there", res);
        } else {
          console.log("ERROR");
          setError(true);
        }
      })
      .catch((err) => console.log("NOT VALID STRING"));
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchParam(e.target.value);
  };

  return (
    <div className="App">
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
      ) : (
        moviesList.map((movie) => (
          <div key={movie.imdbID}>
            <h1>{movie.Title}</h1>

            <Link to={`/${movie.imdbID}`}>HERE</Link>
          </div>
        ))
      )}
      {
        <>
          <img src={illustration} alt="empty-state" />
          <p>Here's an offer you can't refuse</p>
        </>
      }
    </div>
  );
}

export default Home;
