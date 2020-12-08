import React, { useState, useEffect, useCallback } from "react";
import MovieItem from "./MovieItems";
import SearchBar from "../../components/SearchBar";
import HomeText from "../../components/HomeText";
import SearchError from "../../components/SearchError";
import Loader from "../../components/Loader";
import { getMoviesList } from "../../services/movies";
import illustration from "../../images/2.Illustrations/illustration-empty-state.png";
import "./styles.scss";

const Home = ({ favorites }) => {
  const [searchText, setSearchText] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);

  const handleSuccessfulHttpReq = useCallback((result) => {
    setSearchError(false);
    setIsLoading(false);
    setMoviesList(result);
  }, []);

  const handleUnsuccessfulHttpReq = useCallback(() => {
    setSearchError(true);
    setIsLoading(false);
  }, []);

  const handleEmptySearch = useCallback(() => {
    setSearchError(false);
    setMoviesList([]);
  }, []);

  const debounce = useCallback(
    (queryResult) => {
      if (queryResult.Response === "True") {
        handleSuccessfulHttpReq(queryResult.Search);
      } else {
        handleUnsuccessfulHttpReq();
      }
    },
    [handleSuccessfulHttpReq, handleUnsuccessfulHttpReq],
  );

  useEffect(() => {
    if (searchText) {
      const httpRequest = setTimeout(async () => {
        setIsLoading(true);

        const { data } = await getMoviesList(searchText);
        debounce(data);
      }, 1000);

      document.addEventListener("keydown", () => clearTimeout(httpRequest));
      return () => {
        document.removeEventListener("keydown", () =>
          clearTimeout(httpRequest),
        );
      };
    } else {
      handleEmptySearch();
    }
  }, [searchText, handleEmptySearch, debounce]);

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
