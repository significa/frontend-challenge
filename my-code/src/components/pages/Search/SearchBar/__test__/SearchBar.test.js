import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import SearchBar from '../index';

const onChange = jest.fn();

describe('<SearchBar />', () => {
  it('should render SearchBar', async () => {
    render(<SearchBar searchTitle={'The Matrix'} onChange={onChange} />);

    expect(screen.getByPlaceholderText('Search movies...')).toHaveValue(
      'The Matrix'
    );
  });

  it('should call onChange', async () => {
    render(<SearchBar onChange={onChange} searchTitle={'The Matrix'} />);

    const searchBarInput = screen.getByPlaceholderText('Search movies...');
    await userEvent.type(searchBarInput, 'The Matrix');

    expect(screen.getByPlaceholderText('Search movies...')).toHaveValue(
      'The Matrix'
    );
  });
});
