import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Layout from '../Layout';

describe('<Layout />', () => {
  it('should render', async () => {
    render(<Layout />);

    expect(screen.getByRole('link', { name: /What's in logo/ })).toBeInTheDocument();
  });
});
