import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItems";
import SearchBar from "../../components/SearchBar";
import HomeText from "../../components/HomeText";
import SearchError from "../../components/SearchError";
import Loader from "../../components/Loader";
import Illustration from "../../images/2.Illustrations/illustration-empty-state.png";
import "./styles.scss";
import axios from "axios";

const Home = ({ favorites }) => {
  const [searchText, setSearchText] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);

  useEffect(() => {
    console.log("movies list", moviesList);
    if (searchText) {
      const httpRequest = setTimeout(async () => {
        setIsLoading(true);
        const { data } = await axios.get(
          `http://www.omdbapi.com/?s=${searchText}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
        );
        console.log(data);
        if (data.Response === "True") {
          searchError && setSearchError(false); //Checks if there was a search error on the previous request
          setMoviesList(data.Search);
          setIsLoading(false);
        } else {
          setSearchError(true);
          setIsLoading(false);
        }
      }, 500);

      document.addEventListener("keydown", () => clearTimeout(httpRequest));
      return () => {
        document.removeEventListener("keydown", () =>
          clearTimeout(httpRequest),
        );
      };
    } else {
      setMoviesList([]);
    }
  }, [searchText, searchError]);

  console.log(moviesList);

  return (
    <div className="home-container d-flex flex-column align-items-center">
      <SearchBar searchText={searchText} setSearchText={setSearchText} />

      {isLoading ? (
        <Loader />
      ) : searchError ? (
        <SearchError />
      ) : !moviesList.length ? (
        <>
          <img src={Illustration} alt="illustration" />
          <HomeText />
        </>
      ) : (
        <MovieItem moviesList={moviesList} favorites={favorites} />
      )}
    </div>
  );
};

export default Home;
