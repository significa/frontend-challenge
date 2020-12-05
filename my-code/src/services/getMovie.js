import axios from 'axios';
import getConfig from 'next/config';

const getMovie = async id => {
  const { publicRuntimeConfig } = getConfig();
  const { siteUrl } = publicRuntimeConfig;

  try {
    const response = await axios.get(`${siteUrl}/api/movie?id=${id}`);

    return response;
  } catch (error) {
    return error.response;
  }
};

export default getMovie;
