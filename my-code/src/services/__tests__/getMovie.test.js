// @flow
import getMovie from '../getMovie';
import fetch from 'isomorphic-fetch';

jest.mock('isomorphic-fetch');

const expectResponse = {
  id: 'tt0207201',
  title: 'What Women Want',
  runtime: '127 min',
  year: '2000',
  rated: 'PG-13',
  poster:
    'https://m.media-amazon.com/images/M/MV5BZjUyZWE5YmMtNDA2ZC00NzFlLTg0MzktOTgzYjA2ZWE3NmIwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  ratings: [
    {
      Source: 'Internet Movie Database',
      Value: '6.4/10'
    },
    {
      Source: 'Rotten Tomatoes',
      Value: '54%'
    },
    {
      Source: 'Metacritic',
      Value: '47/100'
    }
  ],
  plot: 'After an accident, a chauvinistic executive gains the ability to hear what women are really thinking.',
  actors: 'Mel Gibson, Helen Hunt, Marisa Tomei, Alan Alda',
  genre: 'Comedy, Fantasy, Romance',
  director: 'Nancy Meyers'
};

describe('service', () => {
  describe('getMovie ', () => {
    it('should return response on success', async () => {
      fetch.mockImplementationOnce(() => Promise.resolve({ ok: true, json: () => Promise.resolve(expectResponse) }));

      const response = await getMovie('tt0207201');

      expect(response).toEqual({ ok: true, movie: { ...expectResponse } });
    });

    it('should return response on failed', async () => {
      fetch.mockImplementationOnce(() => Promise.resolve({ ok: false }));

      const response = await getMovie('tt0207201');

      expect(response).toEqual({ ok: false });
    });
  });
});
