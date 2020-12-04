import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieCard from '../index';

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

const movieMock = {
  Title: 'The Matrix',
  Year: '1999',
  imdbID: 'tt0133093',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
};

describe('<MovieCard />', () => {
  it('should render MovieCard', async () => {
    render(<MovieCard {...movieMock} />);

    expect(screen.getByText('The Matrix')).toBeInTheDocument();
    expect(screen.getByText('1999')).toBeInTheDocument();
    expect(screen.getByAltText(/The Matrix/)).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /favourite disabled/ })
    ).toBeInTheDocument();
  });

  it('should render favourite active', async () => {
    render(<MovieCard {...movieMock} />);

    const favouriteButton = screen.getByTestId('favourite-button');
    userEvent.click(favouriteButton);

    expect(screen.getByText('The Matrix')).toBeInTheDocument();
    expect(screen.getByText('1999')).toBeInTheDocument();
    expect(screen.getByAltText(/The Matrix/)).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /favourite active/ })
    ).toBeInTheDocument();
  });
});
