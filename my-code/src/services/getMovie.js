import axios from 'axios';

const getMovie = async id => {
  const siteApiUrl = process.env.siteApiUrl;

  try {
    const response = await axios.get(`${siteApiUrl}/api/movie?id=${id}`);

    return response.data;
  } catch (error) {
    return error.response;
  }
};

export default getMovie;
