import React, { useState, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';

import {
	Container,
	SearchBar,
	Empty,
	Illustration,
	Title,
	Subtitle,
	Results,
} from './styles';
import Logo from '../../components/Logo';
import MovieCard from './MovieCard';

import { searchMovies } from '../../services/api';

export default function HomePage() {
	const [results, setResults] = useState([]);
	const [value, setValue] = useState('');

	useEffect(() => {
		if (value === '') {
			setResults([]);
			return;
		}

		searchMovies(value).then(({ data }) =>
			setResults(data.results.filter((item) => item.poster_path))
		);
	}, [value]);

	return (
		<Container>
			<Logo />
			<SearchBar>
				<label htmlFor="search">
					<MdSearch size={22} />
				</label>
				<input
					id="search"
					placeholder="Search movies..."
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</SearchBar>

			{results.length === 0 ? (
				<Empty>
					<Illustration />

					<Title>Don't know what to search?</Title>
					<Subtitle>Here's an offer you can't refuse</Subtitle>
				</Empty>
			) : (
				<Results>
					{results.map((item) => (
						<MovieCard key={item.id} {...item} />
					))}
				</Results>
			)}
		</Container>
	);
}
