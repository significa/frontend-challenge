import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import MovieCard from '../index';

describe('<MovieCard />', () => {
  it('should render MovieCard', async () => {
    render(
      <MovieCard
        title="The Matrix"
        year={'1999'}
        id={'tt0133093'}
        cover={'movie.jpg'}
      />
    );

    expect(screen.getByText('The Matrix')).toBeInTheDocument();
    expect(screen.getByText('1999')).toBeInTheDocument();
    expect(screen.getByAltText(/The Matrix/)).toBeInTheDocument();
  });
});
