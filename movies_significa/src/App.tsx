import React, { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./Components/Movies";
import "./App.css";
require("dotenv").config();

interface IApp {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

//Initial page, image and random
const App: React.FC = () => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [searchParam, setSearchParam] = useState<string>();
  const [moviesList, setMoviesList] = useState<object[]>([]);
  console.log("API KEY", api_key);

  const searchMovie = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("searching for ", searchParam);
    axios
      .get(`http://www.omdbapi.com/?s=${searchParam}&apikey=${api_key}`)
      .then((res) => {
        console.log(res.data.Search);
        setMoviesList(res.data.Search);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam(e.target.value);
  };

  return (
    <div className="App">
      <header></header>
      <form onSubmit={searchMovie}>
        <input
          name="search"
          type="text"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
      </form>
      <Movies moviesList={moviesList} /* setMoviesList={setMoviesList} */ />
    </div>
  );
};

export default App;
