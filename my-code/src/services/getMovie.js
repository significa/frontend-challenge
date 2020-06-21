// @flow
import fetch from 'isomorphic-fetch';
const url = '/api/movie';

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
  try {
    const data = await fetch(`${url}?id=${id}`);

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
