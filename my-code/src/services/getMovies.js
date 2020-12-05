import axios from 'axios';
import getConfig from 'next/config';

const getMovies = async title => {
  const { publicRuntimeConfig } = getConfig();
  const { siteUrl } = publicRuntimeConfig;

  try {
    const response = await axios.get(`${siteUrl}/api/movies?title=${title}`);

    return response.data;
  } catch (error) {
    return error.response;
  }
};

export default getMovies;
