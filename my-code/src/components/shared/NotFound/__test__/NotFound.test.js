import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import NotFound from '../index';

describe('<NotFound />', () => {
  it('should render NotFound', async () => {
    render(<NotFound />);

    expect(screen.getByText('Movie not found :(')).toBeInTheDocument();
    expect(
      screen.getByText('Try to search for another movie!')
    ).toBeInTheDocument();
  });
});
