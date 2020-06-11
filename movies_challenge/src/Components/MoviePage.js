import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";
import { REACT_APP_API_KEY } from "./../settings";

function MoviePage(props) {
  const api_key = REACT_APP_API_KEY;
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({
    Actors: "",
  });
  console.log("PROPS", props);

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
    <div className="App">
      <h1>PAge</h1>
      {loading ? <p>Loading</p> : <p>{movie.Actors}</p>}
    </div>
  );
}

export default MoviePage;
