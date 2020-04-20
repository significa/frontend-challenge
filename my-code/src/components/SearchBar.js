import React from 'react';

//css
import {
	SearchBarStyle
} from '../Styles/styles';

export const SearchBar = (props) => {
	return (
		<SearchBarStyle>
			<i className='fa fa-search' aria-hidden='true' />
			<input
				data-testid='searchBar'
				type='text'
				name='query'
				placeholder='Search movies...'
				value={props.value}
				onChange={props.onChange}
			/>
		</SearchBarStyle>
	);
};
