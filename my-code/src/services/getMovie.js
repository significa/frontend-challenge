// @flow
import fetch from 'isomorphic-fetch';
require('dotenv').config();

const { SITE_API_BASE_URL } = process?.env;

const baseApiUrl = (SITE_API_BASE_URL && `${SITE_API_BASE_URL}/api`) || 'http://localhost:3000';

type ReturnTypes = {
  ok: boolean,
  movie?: {
    title: string,
    runtime: string,
    year: string,
    rated: string,
    poster: string,
    ratings: Array<string>,
    plot: string,
    actors: string,
    genre: string,
    director: string
  },
  error?: any
};

export default async function getMovies(id: string): Promise<ReturnTypes> {
  const url = `${baseApiUrl}/movie`;

  try {
    const data = await fetch(`${url}?id=${id}`);
    console.log(data);
    if (data.ok) {
      const response = await data.json();

      return {
        movie: response,
        ok: true
      };
    }

    const response = data;
    return response;
  } catch (error) {
    return { error, ok: false };
  }
}
