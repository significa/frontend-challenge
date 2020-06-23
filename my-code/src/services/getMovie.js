// @flow
import fetch from 'isomorphic-fetch';
import timeout from '../utils/timeout-promise';
require('dotenv').config();

const { SITE_API_BASE_URL } = process?.env;

const baseApiUrl = (SITE_API_BASE_URL && `${SITE_API_BASE_URL}/api`) || 'http://localhost:3000';

type ReturnTypes = {
  ok: boolean,
  movie?: ?{
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
    const data = await timeout(5000, fetch(`${url}?id=${id}`));
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
