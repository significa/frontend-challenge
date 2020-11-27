import axios from 'axios';

const getMovies = async title => {
  const siteApiUrl = process.env.siteApiUrl;
  try {
    const response = await axios.get(`${siteApiUrl}/api/movies?title=${title}`);

    return response.data;
  } catch (error) {
    return error.response;
  }
};

export default getMovies;
