import Head from "next/head";
import React, { useState, useEffect, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Grid, InputAdornment, TextField } from "@mui/material";
import { FormWrapper, PageWrapper } from "../styles";
import Alert from "../components/Alert";
import MovieCard from "../components/MovieCard";
import { debounce } from "lodash";
interface movieType {
  movies: [
    {
      imdbID: string;
      Title: string;
      Poster: string;
      Year: string;
    }
  ];
}

const Home = () => {
  //create the state for loading  movies
  const [movies, setMovies] = useState<movieType>({
    movies: [{ imdbID: "", Title: "", Poster: "", Year: "" }],
  });
  const [query, setQuery] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);
  const [open, setOpen] = useState(true);
  const closeAlert = () => {
    setOpen(false);
  };

  //handle movie search by name
  const searchMovies = async (event: any) => {
    event.preventDefault();
    try {
      const res = await fetch(`/api/getMoviesByName?name=${query}`);
      const movieList = await res.json();
      setMovies(movieList);
    } catch (error) {
      error && setErrorAlert(true);
    }
  };
  //handle text input value change
  const handleChange = (event: any) => {
    setQuery(event.target.value);
    searchMovies(event);
  };

  // essential because if we don’t persist this data between re-renders
  // other implementations of debounce will occur on every re-render
  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 500);
  }, []);

  //clean up any side effects from debounce when our component gets unmounted
  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <>
      <Head>
        <title>Search</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      {errorAlert && <Alert open={open}  closeAlert={closeAlert}/>}
      <PageWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <FormWrapper component="div">
              <TextField
                size="small"
                onChange={handleChange}
                className="input"
                type="text"
                name="query"
                placeholder="Search movies..."
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormWrapper>
          </Grid>
          <MovieCard movies={movies} />
        </Grid>
      </PageWrapper>
    </>
  );
};

export default Home;
