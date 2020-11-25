import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import MovieCard from '../index';

describe('<MovieCard />', () => {
  it('should render MovieCard', async () => {
    render(
      <MovieCard
        Title="The Matrix"
        Year={'1999'}
        imdbID={'tt0133093'}
        Poster={'movie.jpg'}
      />
    );

    expect(screen.getByText('The Matrix')).toBeInTheDocument();
    expect(screen.getByText('1999')).toBeInTheDocument();
    expect(screen.getByAltText(/The Matrix/)).toBeInTheDocument();
  });
});
