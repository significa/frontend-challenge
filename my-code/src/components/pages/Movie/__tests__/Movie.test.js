import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Movie from '../Movie';
import userEvent from '@testing-library/user-event';

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

const resultsResolveMock = {
  ok: true,
  movie: {
    title: 'What Women Want',
    year: '2000',
    rated: 'PG-13',
    released: '15 Dec 2000',
    runtime: '127 min',
    genre: 'Comedy, Fantasy, Romance',
    director: 'Nancy Meyers',
    writer:
      'Josh Goldsmith (story), Cathy Yuspa (story), Diane Drake (story), Josh Goldsmith (screenplay), Cathy Yuspa (screenplay)',
    actors: 'Mel Gibson, Helen Hunt, Marisa Tomei, Alan Alda',
    plot: 'After an accident, a chauvinistic executive gains the ability to hear what women are really thinking.',
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
    ]
  }
};

describe('<Movie />', () => {
  it('should render with title', async () => {
    render(<Movie {...resultsResolveMock} />);

    expect(screen.getByRole('heading', { name: /What Women Want/ })).toBeInTheDocument();
  });
  it('should render with plot', async () => {
    render(<Movie {...resultsResolveMock} />);

    expect(screen.getByRole('heading', { name: /Plot/ })).toBeInTheDocument();
  });

  it('should render with cast list', async () => {
    render(<Movie {...resultsResolveMock} />);

    const genre = resultsResolveMock.movie.genre.split(', ');

    expect(screen.getByRole('heading', { name: /Genre/ })).toBeInTheDocument();
    genre.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('should render with director list', async () => {
    render(<Movie {...resultsResolveMock} />);

    const actors = resultsResolveMock.movie.actors.split(', ');

    expect(screen.getByRole('heading', { name: /Cast/ })).toBeInTheDocument();
    actors.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('should render with director list', async () => {
    render(<Movie {...resultsResolveMock} />);

    const director = resultsResolveMock.movie.actors.split(', ');

    expect(screen.getByRole('heading', { name: /Director/ })).toBeInTheDocument();
    director.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('should render Ratings', async () => {
    render(<Movie {...resultsResolveMock} />);

    expect(screen.getByText('6.4/10')).toBeInTheDocument();
    expect(screen.getByText('54%')).toBeInTheDocument();
  });

  it('should not render metacritic rating', async () => {
    render(<Movie {...resultsResolveMock} />);

    expect(screen.queryByText('47/100')).not.toBeInTheDocument();
  });

  it('should add movie to favourites', async () => {
    render(<Movie {...resultsResolveMock} />);

    const likeButton = screen.getByRole('button', { name: /Add to favourites/ });
    userEvent.click(likeButton);
    expect(screen.getByRole('button', { name: /Added/ })).toBeInTheDocument();
  });

  it('should render error page', async () => {
    render(<Movie error />);

    expect(screen.getByText('Something went wrong :/')).toBeInTheDocument();
  });

  it('should render not found page', async () => {
    render(<Movie movie={{}} />);

    expect(screen.getByText('Movie not found :/')).toBeInTheDocument();
  });
});
