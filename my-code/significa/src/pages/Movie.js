import React from "react";
import { useParams } from "@reach/router";
import Layout from "../components/layout";

const Movie = () => {
  const params = useParams();

  return (
    <Layout>
      {params.movieId === "not-found" ? (
        <h1>not found</h1>
      ) : (
        <h1>Movie {params.movieId} </h1>
      )}
    </Layout>
  );
};

export default Movie;
