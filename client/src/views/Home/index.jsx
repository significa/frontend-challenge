import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItems";
import SearchBar from "../../components/SearchBar";
import HomeText from "../../components/HomeText";
import SearchError from "../../components/SearchError";
import Loader from "../../components/Loader";
import illustration from "../../images/2.Illustrations/illustration-empty-state.png";
import "./styles.scss";
import axios from "axios";

const Home = ({ favorites }) => {
  const [searchText, setSearchText] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);

  useEffect(() => {
    if (searchText) {
      const httpRequest = setTimeout(async () => {
        setIsLoading(true);
        const { data } = await axios.get(
          `http://www.omdbapi.com/?s=${searchText}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
        );
        if (data.Response === "True") {
          searchError && setSearchError(false); //Checks if there was a search error on the previous request
          setIsLoading(false);
          setMoviesList(data.Search);
        } else {
          setSearchError(true);
          setIsLoading(false);
        }
      }, 1000);

      document.addEventListener("keydown", () => clearTimeout(httpRequest));
      return () => {
        document.removeEventListener("keydown", () =>
          clearTimeout(httpRequest),
        );
      };
    } else {
      searchError ? setSearchError(false) : setMoviesList([]);
    }
  }, [searchText]);

  const displayComponent = () => {
    if (isLoading) {
      return <Loader />;
    } else if (searchError) {
      return <SearchError />;
    } else if (!moviesList.length) {
      return (
        <>
          <img src={illustration} alt="illustration" className="col-sm-12" />
          <HomeText />
        </>
      );
    } else {
      return <MovieItem moviesList={moviesList} favorites={favorites} />;
    }
  };

  return (
    <div className="home-container d-flex flex-column align-items-center ">
      <SearchBar searchText={searchText} setSearchText={setSearchText} />

      {displayComponent()}
    </div>
  );
};

export default Home;
