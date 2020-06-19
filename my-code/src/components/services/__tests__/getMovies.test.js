import getMovies from '../getMovies';

global.fetch = jest.fn();

const expectResponse = {
  response: 'True',
  search: [
    {
      Title: 'The Hunt',
      Year: '2012',
      imdbID: 'tt2106476',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BNDM2MzMwMzcxNF5BMl5BanBnXkFtZTcwNTczMDk3OA@@._V1_SX300.jpg'
    },
    {
      Title: 'The Hunt for Red October',
      Year: '1990',
      imdbID: 'tt0099810',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BY2Y5NWVjMmQtMWRmOC00ZTg3LWI3YWQtZGI2MWUwNWQ4OWQ2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'
    },
    {
      Title: 'Hunt for the Wilderpeople',
      Year: '2016',
      imdbID: 'tt4698684',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMjI1MDQ2MDg5Ml5BMl5BanBnXkFtZTgwMjc2NjM5ODE@._V1_SX300.jpg'
    }
  ]
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(expectResponse)
  })
);

describe('service', () => {
  describe('service getPosList', () => {
    it('should return response', async () => {
      const response = await getMovies('Hunt');

      expect(response).toEqual(expectResponse);
    });
  });
});
