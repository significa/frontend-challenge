import React, { Fragment, useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';

import { SearchBar } from './SearchBar';
import { ButtonCard } from './Button';

//css
import {
	Container,
	SearchMovie,
	SearchMovieTitle,
	MsgNotFound,
	MsgError,
	LoadingDIV,
	SearchMovieSubTitle,
	Cell,
	MovieCardStyle,
	MovieFavorite,
	MovieLink,
	MovieHover,
	MovieTitleYear,
	MovieTitle,
	MovieYear
} from '../Styles/styles';

////
export default function Fetch() {
	const [ statusFetch, setStatusFetch ] = useState('idle');
	const [ statusMovie, setStatusMovie ] = useState('');
	const [ movieList, setMovieList ] = useState([]);
	const [ searchInputValue, setSearchInputValue ] = useState('');
	const [ favoriteMovies, setFavoriteMovies ] = useState([]);

	///
	const fetchMovieList = async (query) => {
		if (query !== '') {
			setStatusFetch('loading');
			try {
				const res = await fetch(`http://www.omdbapi.com/?apikey=b5979027&s=${removeExtraSpace(query)}`);
				const movieListFromApi = await res.json();
				if (movieListFromApi.Response === 'True') {
					setStatusFetch('resolved');
					setStatusMovie('found');
					setMovieList(movieListFromApi.Search);
				} else {
					setMovieList([]);
					setStatusMovie('notFound');
				}
				setStatusFetch('idle');
			} catch (error) {
				setStatusFetch('rejected');
			}
		} else {
			setMovieList([]);
			setStatusMovie('');
		}
	};

	// debounce
	const myDebouncedFunction = useRef(debounce((query) => fetchMovieList(query), 350)).current;
	// =
	//const myDebouncedFunction = useCallback(debounce((query) => fetchMovieList(query), 200), []);

	const removeExtraSpace = (s) => s.trim().split(/ +/).join(' ');

	const handleSearch = ({ target: { value: inputValue } }) => {
		setSearchInputValue(inputValue);
		myDebouncedFunction(inputValue);
	};

	// LocalStorage and Favorites
	useEffect(
		() => {
			const matches = movieList
				.filter(({ imdbID }) => JSON.parse(localStorage.getItem(imdbID)))
				.map(({ imdbID }) => imdbID);
			setFavoriteMovies(matches);
		},
		[ movieList ]
	);

	const favoriteHandle = (movieImdbID) => {
		if (JSON.parse(localStorage.getItem(movieImdbID)) === null) {
			localStorage.setItem(movieImdbID, true);
			setFavoriteMovies([ ...favoriteMovies, movieImdbID ]);
		} else {
			localStorage.removeItem(movieImdbID);
			setFavoriteMovies(favoriteMovies.filter((id) => id !== movieImdbID));
		}
	};

	////
	return (
		<Container>
			<SearchBar value={searchInputValue} onChange={handleSearch} />

			{statusFetch === 'rejected' && <MsgError>Oh no, there was a problem getting your Movies</MsgError>}

			{statusFetch === 'idle' && searchInputValue === '' ? (
				<SearchMovie>
					<img src='images/searchMovie.png' alt='Search Movies' />
					<SearchMovieTitle>Don't know what to search?</SearchMovieTitle>
					<SearchMovieSubTitle>Here's an offer you can't refuse</SearchMovieSubTitle>
				</SearchMovie>
			) : statusFetch === 'loading' && statusFetch !== 'idle' ? (
				<LoadingDIV>
					<div className='loader'> Loading... </div>
				</LoadingDIV>
			) : statusMovie === 'notFound' && searchInputValue !== '' ? (
				<MsgNotFound>Not Found</MsgNotFound>
			) : (
				statusMovie === 'found' && (
					<Fragment>
						{movieList.map((movie) => (
							<Cell key={movie.imdbID}>
								<MovieCardStyle>
									<img alt={movie.Title} src={movie.Poster} />
									<MovieHover hasFavorite={favoriteMovies.indexOf(movie.imdbID) >= 0}>
										<MovieFavorite>
											{favoriteMovies.indexOf(movie.imdbID) !== -1 ? (
												<ButtonCard
													onClick={() => favoriteHandle(movie.imdbID)}
													icon='fa fa-heart'
												/>
											) : (
												<ButtonCard
													onClick={() => favoriteHandle(movie.imdbID)}
													icon='fa fa-heart-o'
												/>
											)}
										</MovieFavorite>
										<Link to={`/${movie.imdbID}`}>
											<MovieLink>
												<MovieTitleYear>
													<MovieTitle>{movie.Title}</MovieTitle>
													<MovieYear>{movie.Year}</MovieYear>
												</MovieTitleYear>
											</MovieLink>
										</Link>
									</MovieHover>
								</MovieCardStyle>
							</Cell>
						))}
					</Fragment>
				)
			)}
		</Container>
	);
}
