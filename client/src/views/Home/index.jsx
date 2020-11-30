import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import HomeText from "../../components/HomeText";
import SearchError from "../../components/SearchError";
import Illustration from "../../images/2.Illustrations/illustration-empty-state.png";
import "./styles.scss";
import axios from "axios";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [searchError, setSearchError] = useState(false);

  useEffect(() => {
    console.log("movies list", moviesList);
    if (searchText) {
      const httpRequest = setTimeout(async () => {
        const { data } = await axios.get(
          `http://www.omdbapi.com/?s=${searchText}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
        );
        console.log(data);
        if (data.Response === "True") {
          searchError && setSearchError(false); //Checks if there was a search error on the previous request
          setMoviesList(data.Search);
        } else {
          setSearchError(true);
        }
      }, 1000);
      const clearHttpRequestTimer = () => {
        clearTimeout(httpRequest);
      };
      document.addEventListener("keydown", clearHttpRequestTimer);
      return () => {
        document.removeEventListener("keydown", clearHttpRequestTimer);
      };
    } else {
      setMoviesList([]);
    }
  }, [searchText]);

  return (
    <div className="home-container d-flex flex-column align-items-center">
      <SearchBar searchText={searchText} setSearchText={setSearchText} />

      {searchError ? (
        <SearchError />
      ) : !moviesList.length ? (
        <>
          <img src={Illustration} alt="illustration" />
          <HomeText />
        </>
      ) : (
        <section className="w-100 poster d-flex flex-wrap mt-4">
          {moviesList.map((movie) => (
            <div className="col-md-2 p-0 mt-3 px-2">
              <img
                key={movie.imdbID}
                src={movie.Poster}
                alt={movie.Title}
                className="w-100"
              />
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Home;
