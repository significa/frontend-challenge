import axios from 'axios';
import { omdbUrl, omdbApiKey } from '../../config';

export default async (req, res) => {
  const { query } = req;

  try {
    const response = await axios.get(
      `${omdbUrl}/?i=${query.id}&plot=full&apikey=${omdbApiKey}`
    );

    res.send(response.data);
  } catch (error) {
    res.send({ error, response: false });
  }
};
