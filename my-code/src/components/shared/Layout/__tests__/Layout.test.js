// @flow
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Layout from '../Layout';

describe('<Layout />', () => {
  it('should render', async () => {
    render(
      <Layout>
        <h1>Some Page</h1>
      </Layout>
    );

    expect(screen.getByRole('link', { name: /What's in logo/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Some Page/ })).toBeInTheDocument();
  });
});
