// @flow

const url = 'http://localhost:3000/api/movies';

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
    const data = await fetch(`${url}?titleToSearch=${titleToSearch}`);

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
