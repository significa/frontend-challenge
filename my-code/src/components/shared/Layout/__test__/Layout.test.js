import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Layout from '../index';

describe('<Layout />', () => {
  it('should render Layout with children', async () => {
    render(
      <Layout>
        <p>Whats in</p>
      </Layout>
    );

    expect(screen.getByText('Whats in')).toBeInTheDocument();
  });
});
