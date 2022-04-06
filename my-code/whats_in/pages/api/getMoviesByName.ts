import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// API TEST functionality (gets the james bond movie details by name )
//http:localhost:3000/api/getMoviesByName?name=james bond


type Data = {
  movies?: [];
  error?: string;
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const movieName = req.query.name;

  if (movieName) {
    const getMoviesByName = async () => {
      const url = `http://www.omdbapi.com/?s=${movieName}&apikey=d3e8c483`;
      try {
        const response = await axios.get(url);
        const movieList = response.data.Search;
        res.send(movieList);
      } catch (error) {
        res.status(500).send({ message: `${error}` });
      }
    };
    getMoviesByName();
  } else {
    res.status(400).send({
      movies: [],
      error: `movie name is required but got ${movieName}`,
    });
  }
}
