import axios from 'axios';
import getConfig from 'next/config';

const getMovie = async id => {
  const { publicRuntimeConfig } = getConfig();
  const { siteApiUrl } = publicRuntimeConfig;

  try {
    const response = await axios.get(`${siteApiUrl}/api/movie?id=${id}`);

    return response;
  } catch (error) {
    return error.response;
  }
};

export default getMovie;
