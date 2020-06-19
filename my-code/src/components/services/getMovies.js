const url = 'http://localhost:3000/api/movies';

export default async function getMovies(titleToSearch) {
  try {
    const data = await fetch(`${url}?titleToSearch=${titleToSearch}`);
    const response = await data.json();
    return response;
  } catch (error) {
    return { error };
  }
}
