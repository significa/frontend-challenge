import axios from 'axios';

const getMovies = async title => {
  try {
    const response = await axios.get(`/api/movies?title=${title}`);

    return response.data;
  } catch (error) {
    return { error, response: 'false' };
  }
};

export default getMovies;
