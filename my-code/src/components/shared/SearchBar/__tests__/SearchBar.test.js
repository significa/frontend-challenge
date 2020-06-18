import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../SearchBar';

describe('<SearchBar />', () => {
  it('should render with value', () => {
    const onChange = jest.fn();
    render(<SearchBar onChange={onChange} placeholder="Search movies..." value="Hunt for the wilderpeople" />);

    expect(screen.getByPlaceholderText('Search movies...')).toHaveValue('Hunt for the wilderpeople');
  });

  it('should render with placeholder', () => {
    render(<SearchBar placeholder="Search movies..." />);

    expect(screen.getByPlaceholderText('Search movies...')).toBeInTheDocument();
  });

  it('should call onChange', async () => {
    const onChange = jest.fn();
    render(<SearchBar onChange={onChange} placeholder="Search movies..." />);

    const searchInput = screen.getByPlaceholderText('Search movies...');
    await userEvent.type(searchInput, 'Hunt for the wilderpeople');
    expect(onChange).toHaveBeenCalled();
  });
});
