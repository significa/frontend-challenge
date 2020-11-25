import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import EmptyState from '../index';

describe('<EmptyState />', () => {
  it('should render EmptyState', async () => {
    render(<EmptyState />);

    expect(screen.getByText('Don’t know what to search?')).toBeInTheDocument();
    expect(
      screen.getByText('Here’s an offer you can’t refuse')
    ).toBeInTheDocument();
  });
});
