const url = 'http://localhost:3000/api/movies';

export default async function getMovies(titleToSearch) {
  try {
    const data = await fetch(`${url}?titleToSearch=${titleToSearch}`);

    // console.log(data.json)

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
    return { error };
  }
}
