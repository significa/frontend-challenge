import dotenv from 'dotenv';
import fetch from 'isomorphic-fetch';

dotenv.config();

const url = 'http://www.omdbapi.com';

export default async (req, res) => {
  const { query } = req;
  try {
    const data = await fetch(`${url}/?s=${query.titleToSearch}&type=movie&apikey=${process.env.OMDB_API_KEY}`);
    const response = await data.json();
    console.log(response);
    const { Search, Response } = response;
    res.json({
      search: Search,
      response: Response
    });
  } catch (error) {
    res.send({
      error
    });
  }
};
