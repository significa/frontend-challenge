import React from 'react';
import useFetchMovies from '../useFetchMovies';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

global.fetch = jest.fn();

const expectResponse = {
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

const WrapperHook = () => {
  const { error, fetching, movies } = useFetchMovies('Hunt');

  if (error) return <h1>error</h1>;
  if (fetching) return <h1>fetching</h1>;
  if (!movies) return <h1></h1>;

  return movies.map(({ Title }) => <h1 key={Title}>{Title}</h1>);
};

describe('hooks', () => {
  describe('useFetchMovies ', () => {
    it('should return response on success', async () => {
      fetch.mockImplementationOnce(() => Promise.resolve({ ok: true, json: () => Promise.resolve(expectResponse) }));

      render(<WrapperHook />);

      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /Hunt for the Wilderpeople/ })).toBeInTheDocument();
      });
    });

    it('should return response on success', async () => {
      fetch.mockImplementationOnce(() =>
        setTimeout(() => Promise.resolve({ ok: false, json: () => Promise.resolve(expectResponse) }))
      );

      render(<WrapperHook />);

      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /error/ })).toBeInTheDocument();
      });
    });

    it('should return response on success', async () => {
      fetch.mockImplementationOnce(() => Promise.resolve({ ok: false, json: () => Promise.resolve(expectResponse) }));

      render(<WrapperHook />);
      expect(screen.getByRole('heading', { name: /fetching/ })).toBeInTheDocument();
    });
  });
});
