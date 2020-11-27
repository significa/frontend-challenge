import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import HomeText from "../../components/HomeText";
import Illustration from "../../images/2.Illustrations/illustration-empty-state.png";
import "./styles.scss";
import axios from "axios";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    if (searchText) {
      const httpRequest = setTimeout(async () => {
        const { data } = await axios.get(
          `http://www.omdbapi.com/?s=${searchText}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
        );
        console.log(data);
      }, 1000);
      const clearHttpRequestTimer = () => {
        clearTimeout(httpRequest);
      };
      document.addEventListener("keydown", clearHttpRequestTimer);
      return () => {
        document.removeEventListener("keydown", clearHttpRequestTimer);
      };
    }
  }, [searchText]);

  return (
    <div className="home-container d-flex flex-column align-items-center">
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <img src={Illustration} alt="illustration" />
      <HomeText />
    </div>
  );
};

export default Home;
