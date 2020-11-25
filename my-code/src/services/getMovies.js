import axios from 'axios';
import { siteApiUrl } from '../config';

const getMovies = async title => {
  try {
    console.log(siteApiUrl);
    const response = await axios.get(`/api/movies?title=${title}`);

    return response.data;
  } catch (error) {
    return { error, response: 'false' };
  }
};

export default getMovies;
