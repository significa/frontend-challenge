import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import userEvent from '@testing-library/user-event';
import MovieCard from '../MovieCard';
import getMovies from '../../../../services/getMovies';
import Search from '../index';

jest.mock('../MovieCard', () => jest.fn(() => <div />));
jest.mock('../../../../services/getMovies', () => jest.fn());
const mock = mockFn => mockFn;

class LocalStorageMock {
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

const routerMock = {
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  push: jest.fn().mockResolvedValue(true),
  replace: jest.fn().mockResolvedValue(true),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn()
  },
  isFallback: false
};

const responseMock = {
  Search: [
    {
      Title: 'The Matrix',
      Year: '1999',
      imdbID: 'tt0133093',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
    },
    {
      Title: 'The Matrix Reloaded',
      Year: '2003',
      imdbID: 'tt0234215',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
    },
    {
      Title: 'The Matrix Revolutions',
      Year: '2003',
      imdbID: 'tt0242653',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
    }
  ],
  totalResults: '3',
  Response: 'True'
};

describe('<Search />', () => {
  it('should render movies', async () => {
    render(
      <RouterContext.Provider value={routerMock}>
        <Search />
      </RouterContext.Provider>
    );
    mock(getMovies).mockImplementationOnce(() => Promise.resolve(responseMock));
    const searchBar = screen.getByPlaceholderText('Search movies...');
    await userEvent.type(searchBar, 'The Matrix');
    await waitFor(() => {
      responseMock.Search.forEach((item, index) => {
        expect(MovieCard).toHaveBeenNthCalledWith(
          index + 1,
          expect.objectContaining({
            Title: item.Title,
            imdbID: item.imdbID,
            Poster: item.Poster,
            Year: item.Year
          }),
          {}
        );
      });
    });
  });

  it('should render with empty state', async () => {
    render(<Search />);

    expect(screen.getByText('Don’t know what to search?')).toBeInTheDocument();
    expect(
      screen.getByText('Here’s an offer you can’t refuse')
    ).toBeInTheDocument();
  });

  it('should render loading state with skeleton', async () => {
    render(
      <RouterContext.Provider value={routerMock}>
        <Search />
      </RouterContext.Provider>
    );

    mock(getMovies).mockImplementationOnce(() => Promise.reject());

    const searchBar = screen.getByPlaceholderText('Search movies...');

    await userEvent.type(searchBar, 'star wars');

    screen
      .getAllByTestId('skeleton')
      .forEach(skeleton => expect(skeleton).toBeInTheDocument());
  });

  it('should render when searching error state', async () => {
    render(
      <RouterContext.Provider value={routerMock}>
        <Search />
      </RouterContext.Provider>
    );

    mock(getMovies).mockImplementationOnce(() =>
      Promise.resolve({ Response: false, search: [] })
    );

    const searchBar = screen.getByPlaceholderText('Search movies...');

    await userEvent.type(searchBar, 'star wars');

    await waitFor(() => {
      expect(screen.getByText('Movie Not Found :(')).toBeInTheDocument();
      expect(
        screen.getByText('Try to search for another movie!')
      ).toBeInTheDocument();
    });
  });
});
