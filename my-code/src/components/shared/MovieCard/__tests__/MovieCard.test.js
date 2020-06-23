// @flow
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import MovieCard from '../MovieCard';

class LocalStorageMock {
  store: any;
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

const movie = {
  title: 'What We Do in the Shadows',
  year: '2014',
  id: 'tt3416742',
  poster: 'https://m.media-amazon.com/images/M/MV5BMjAwNDA5NzEwM15BMl5BanBnXkFtZTgwMTA1MDUyNDE@._V1_SX300.jpg'
};

describe('<MovieCard />', () => {
  it('should render', () => {
    render(<MovieCard {...movie} />);

    expect(screen.getByRole('link', { name: /What We Do in the Shadows 2014/ })).toHaveAttribute(
      'href',
      '/movie/tt3416742'
    );
    expect(screen.getByRole('heading', { name: /What We Do in the Shadows/ })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /What We Do in the Shadows Poster/ })).toHaveAttribute(
      'src',
      'https://m.media-amazon.com/images/M/MV5BMjAwNDA5NzEwM15BMl5BanBnXkFtZTgwMTA1MDUyNDE@._V1_SX300.jpg'
    );
    expect(screen.getByRole('img', { name: /Like icon/ })).toBeInTheDocument();
  });

  it('should render liked', () => {
    render(<MovieCard {...movie} />);

    const likeButton = screen.getByRole('img', { name: /Like icon/ });
    userEvent.click(likeButton);
    expect(screen.getByRole('img', { name: /Liked icon/ })).toBeInTheDocument();
  });
});
