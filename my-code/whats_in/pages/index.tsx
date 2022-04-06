import Head from "next/head";
import axios from "axios";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Grid, InputAdornment, TextField } from "@mui/material";
import { FormWrapper, PageWrapper } from "../styles";
import Alert from "../components/alert";
import MovieCard from "../components/movieCard";
import { Key } from "react";

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

  //handle movie search by name
  const searchMovies = async (event: any) => {
    event.preventDefault();
    const url = `http://www.omdbapi.com/?s=${query}&apikey=d3e8c483`;
    try {
      const response = await axios.get(url);
      const movieList = response.data.Search;
      setMovies(movieList);
    } catch (error) {
      error && setErrorAlert(true);
    }
  };
  //handle text input value change
  function handleChange(event: any) {
    setQuery(event.target.value);
  }

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      {errorAlert && <Alert />}
      <PageWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <FormWrapper component="form" onSubmit={searchMovies}>
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
