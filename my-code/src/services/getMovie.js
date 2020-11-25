import axios from 'axios';

const getMovie = async id => {
  try {
    const response = await axios.get(`/api/movie/?id=${id}`);

    return response.data;
  } catch (error) {
    return { error, response: 'false' };
  }
};

export default getMovie;
