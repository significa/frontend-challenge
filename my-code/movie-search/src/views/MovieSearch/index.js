import React from "react";

import MovieCatalogue from "../../components/MovieCatalogue";
import SearchBar from "../../containers/SearchBar";
import Template from "../../components/UI/Layout/template";

const MovieSearch = () => (
  <Template>
    <SearchBar />
    <MovieCatalogue />
  </Template>
);

export default MovieSearch;
