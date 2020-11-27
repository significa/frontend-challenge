import axios from 'axios';
import { omdbUrl, omdbApiKey } from '../../config';

export default async (req, res) => {
  const { query } = req;

  try {
    const response = await axios.get(
      `${omdbUrl}/?s=${query.title}&type=movie&apikey=${omdbApiKey}`
    );

    if (response.data.Response === 'False') {
      res.status(404).send({ Search: [], response: false });
    } else {
      res.send(response.data);
    }

    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error, response: false });
  }
};
