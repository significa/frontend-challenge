import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";
import { REACT_APP_API_KEY } from "./../settings";

function Home() {
  const api_key = REACT_APP_API_KEY;
  const [searchParam, setSearchParam] = useState();
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovie = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(`http://www.omdbapi.com/?s=${searchParam}&apikey=${api_key}`)
      .then((res) => {
        setMoviesList(res.data.Search);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <nav>
        <img src={logo} />
      </nav>
      <form onSubmit={searchMovie}>
        <input
          name="search"
          type="text"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
      </form>
      {loading ? (
        <p>Wait</p>
      ) : (
        moviesList.map((movie) => (
          <div key={movie.imdbID}>
            <h1>{movie.Title}</h1>

            <Link to={`/${movie.imdbID}`}>HERE</Link>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
