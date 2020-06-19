import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../SearchBar';

describe('<SearchBar />', () => {
  it('should render with value', () => {
    const onChange = jest.fn();
    render(<SearchBar onChange={onChange} value="Hunt for the wilderpeople" />);

    expect(screen.getByPlaceholderText('Search movies...')).toHaveValue('Hunt for the wilderpeople');
  });

  it('should call onChange', async () => {
    const onChange = jest.fn();
    render(<SearchBar onChange={onChange} />);

    const searchInput = screen.getByPlaceholderText('Search movies...');
    await userEvent.type(searchInput, 'Hunt for the wilderpeople');
    expect(onChange).toHaveBeenCalled();
  });
});
