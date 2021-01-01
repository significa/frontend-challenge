import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

import Layout from "../components/layout";
import MovieCard from "../components/MovieCard";
import magnifier from "../assets/icons/icon-magnifier-grey.svg";
import illustrationSm from "../assets/illustrations/illustration-empty-state.png";
import illustrationLg from "../assets/illustrations/illustration-empty-state@2x.png";
import "./Home.css";

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const Home = () => {
  /* set variables that use state */
  const [query, setQuery] = useState("");
  const [empty, setEmpty] = useState(true);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  /* function that handles change in the search bar */
  const handleChange = (e) => {
    /* console.log(e.target.value); */
    if (e.target.value === "") {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
    return setQuery(e.target.value);
  };

  /* fetch list of movies from the api when query changes */
  useEffect(() => {
    let mounted = true;

    /* function that gets list of movies from api */
    const getList = async (requestUrl) => {
      try {
        let response = await fetch(requestUrl);
        let json = await response.json();
        if (mounted) {
          setIsLoading(false);
          setMovies(json.Search);
        }
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };

    const requestUrl = encodeURI(
      `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
    );
    setIsLoading(true);
    getList(requestUrl);

    return () => (mounted = false);
  }, [query]);

  /* return different layouts depending on the current results */
  if (error) {
    /* render if there was an error getting the data */
    return (
      <Layout>
        <div className="search-bar">
          <img src={magnifier} alt="magnifier" className="search-bar__icon" />
          <input
            type="text"
            id="search"
            placeholder="Search movies..."
            onChange={handleChange}
            className="search-bar__input"
            aria-label="search-input"
          />
        </div>
        <section className="error-block">
          <h1>Error: {error.message}</h1>
        </section>
      </Layout>
    );
  } else if (isLoading) {
    /* render if data is loading */
    return (
      <Layout>
        <div className="search-bar">
          <img src={magnifier} alt="magnifier" className="search-bar__icon" />
          <input
            type="text"
            id="search"
            placeholder="Search movies..."
            onChange={handleChange}
            className="search-bar__input"
            aria-label="search-input"
          />
        </div>
        <section className="loading-block">
          <h1>Loading...</h1>
        </section>
      </Layout>
    );
  } else if (typeof movies !== "undefined" && movies.length > 0) {
    /* render list of movies if there's any */
    return (
      <Layout>
        <div className="search-bar">
          <img src={magnifier} alt="magnifier" className="search-bar__icon" />
          <input
            type="text"
            id="search"
            placeholder="Search movies..."
            onChange={handleChange}
            className="search-bar__input"
            aria-label="search-input"
          />
        </div>
        <section className="movies-block">
          <ul className="movies-block__list">
            {movies.map((movie) => (
              <li className="movies-block__list__movie" key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>
                  <MovieCard
                    id={movie.imdbID}
                    imgSrc={movie.Poster}
                    title={movie.Title}
                    year={movie.Year}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    );
  } else if (empty) {
    /* render initial search bar + illustration if no request has been made */
    return (
      <Layout>
        <div className="search-bar">
          <img src={magnifier} alt="magnifier" className="search-bar__icon" />
          <input
            type="text"
            id="search"
            placeholder="Search movies..."
            onChange={handleChange}
            className="search-bar__input"
            aria-label="search-input"
          />
        </div>
        <section className="initial-block">
          <div className="initial-block__image-container">
            <picture>
              <source media="(min-width:768px)" srcSet={illustrationLg} />
              <img
                src={illustrationSm}
                alt="illustration of a horse's severed head"
                className="initial-block__image"
              />
            </picture>
          </div>
          <h2 className="initial-block__title">Don't know what to search?</h2>
          <h4 className="initial-block__subtitle">
            Here's an offer you can't refuse...
          </h4>
        </section>
      </Layout>
    );
  } else {
    /* render if data is loading */
    return (
      <Layout>
        <div className="search-bar">
          <img src={magnifier} alt="magnifier" className="search-bar__icon" />
          <input
            type="text"
            id="search"
            placeholder="Search movies..."
            onChange={handleChange}
            className="search-bar__input"
            aria-label="search-input"
          />
        </div>
        <section className="loading-block">
          <h1>Movie not found...</h1>
        </section>
      </Layout>
    );
  }
};

export default Home;
