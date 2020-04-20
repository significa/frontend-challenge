import React from 'react';
import { SearchBar } from '../SearchBar';
import { render, fireEvent } from '@testing-library/react';

test('Search bar, renders value from props', () => {
	const defaultProps = {
		onChange: () => {},
		value: 'Mad Max'
	};
	const { getByTestId } = render(<SearchBar {...defaultProps} />);
	const input = getByTestId('searchBar');

	expect(input.value).toBe('Mad Max');
});

test('Search bar, on change fires onChange prop func', () => {
	const handleSearch = jest.fn();

	const { getByTestId } = render(<SearchBar value='' onChange={handleSearch} />);
	const input = getByTestId('searchBar');

	fireEvent.change(input, { target: { value: 'interstellar' } });

	expect(handleSearch).toHaveBeenCalled();
});
