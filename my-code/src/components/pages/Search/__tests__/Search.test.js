// @flow
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import Search from '../Search';
import MovieCard from '../../../shared/MovieCard';
import getMovies from '../../../../services/getMovies';

jest.mock('../../../shared/MovieCard', () => jest.fn(() => <div />));

jest.mock('../../../../services/getMovies', () => jest.fn());

const mock = (mockFn: any) => mockFn;

class LocalStorageMock {
  store: any;
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }
}

global.localStorage = new LocalStorageMock();

const resultsResolveMock = {
  ok: true,
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

describe('<Search />', () => {
  it('should render with initial page', async () => {
    render(<Search />);

    expect(screen.getByRole('heading', { name: /Don't know what to search\?/ })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Don't know what to search\? Here's an offer you can't refuse/ })
    ).toBeInTheDocument();
  });

  it('should render with list of results', async () => {
    render(<Search />);

    mock(getMovies).mockImplementationOnce(() => Promise.resolve(resultsResolveMock));

    const searchBar = screen.getByPlaceholderText('Search movies...');

    await userEvent.type(searchBar, 'Hunt');

    await waitFor(() => {
      resultsResolveMock.search.forEach((result, index) =>
        expect(MovieCard).toHaveBeenNthCalledWith(
          index + 1,
          expect.objectContaining({
            title: result.Title,
            id: result.imdbID,
            poster: result.Poster,
            year: result.Year
          }),
          {}
        )
      );
    });
  });

  it('should render when cannot find any movie', async () => {
    render(<Search />);

    mock(getMovies).mockImplementationOnce(() => Promise.resolve({ ok: true, search: [] }));

    const searchBar = screen.getByPlaceholderText('Search movies...');

    await userEvent.type(searchBar, 'Hunt');

    await waitFor(() => {
      expect(screen.getByText('Movie not found :/')).toBeInTheDocument();
    });
  });

  it('should render when request failed', async () => {
    render(<Search />);

    mock(getMovies).mockImplementationOnce(() => Promise.resolve());

    const searchBar = screen.getByPlaceholderText('Search movies...');

    await userEvent.type(searchBar, 'Hunt');

    await waitFor(() => {
      expect(screen.getByText('Ops, something went wrong :/')).toBeInTheDocument();
    });
  });

  it('should render skeleton when loading', async () => {
    render(<Search />);

    mock(getMovies).mockImplementationOnce(() => Promise.reject());

    const searchBar = screen.getByPlaceholderText('Search movies...');

    await userEvent.type(searchBar, 'Hunt');

    screen.getAllByTestId('Skeleton').forEach((skeleton) => expect(skeleton).toBeInTheDocument());
  });
});
