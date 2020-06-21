import dotenv from 'dotenv';
import fetch from 'isomorphic-fetch';

dotenv.config();

const url = 'http://www.omdbapi.com';

export default async (req, res) => {
  const { query } = req;
  try {
    const data = await fetch(`${url}/?i=${query.id}&apikey=${process.env.OMDB_API_KEY}`);
    const {
      Title: title,
      Runtime: runtime,
      Year: year,
      Rated: rated,
      Poster: poster,
      Ratings: ratings,
      Plot: plot,
      Actors: actors,
      Genre: genre,
      Director: director,
      imdbID: id
    } = await data.json();

    res.json({ id, title, runtime, year, rated, poster, ratings, plot, actors, genre, director });
  } catch (error) {
    res.send({
      error
    });
  }
};
