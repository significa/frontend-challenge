import axios from 'axios';
import { omdbUrl, omdbApiKey } from '../../config';

export default async (req, res) => {
  const { query } = req;

  try {
    const response = await axios.get(
      `${omdbUrl}/?s=${query.title}&type=movie&apikey=${omdbApiKey}`
    );

    res.send(response.data);
  } catch (error) {
    res.send({ error, response: false });
  }
};
