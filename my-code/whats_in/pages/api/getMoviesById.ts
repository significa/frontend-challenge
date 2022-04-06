
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// API TEST functionality (gets the james bond movie details by id)
//http:localhost:3000/api/getMoviesById?id=tt0366629

type Data = {
  movies?: [];
  error?: string;
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const movieId = req.query.id

  if (movieId) {
    const getMovieDetails = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${movieId}&apikey=d3e8c483`
        );
        res.send(response.data);
      } catch (error) {
        res.status(500).send({ message: `${error}` });
      }
    };
    getMovieDetails();
  } else {
    res.status(400).send({
      movies: [],
      error: `movie ID is required but got ${movieId}`,
    });
  }
}
