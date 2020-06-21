// @flow
import timeout from '../utils/timeout-promise';

const url = '/api/movies';

type ReturnTypes = {
  search?: Array<{
    Title: string,
    Year: string,
    imdbID: string,
    Poster: string
  }>,
  ok: boolean,
  error?: any
};

export default async function getMovies(titleToSearch: string): Promise<ReturnTypes> {
  try {
    const data = await timeout(5000, fetch(`${url}?titleToSearch=${titleToSearch}`));

    if (data.ok) {
      const { search = [] } = await data.json();

      return {
        search,
        ok: true
      };
    }

    const response = data;
    return response;
  } catch (error) {
    return { error, ok: false };
  }
}
