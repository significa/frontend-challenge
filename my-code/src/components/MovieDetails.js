import React, { Fragment, useEffect, useState, useCallback } from 'react';
import { useParams, useHistory } from 'react-router';

import { ButtonLink, ButtonPrimary } from './Button';

//css
import {
	ContainerMovieDetails,
	LoadingDIV,
	TimeYearRated,
	TimeYear,
	Rated,
	Dot,
	MainTitle,
	LabelsGridWrapper,
	LabelsFlexWrapper,
	ImdbLabel,
	TomatoesLabel,
	ImdbRating,
	TomatoesRating,
	SecondaryTitle,
	Text,
	PlotWrapper,
	CastWrapper,
	GenreWrapper,
	DirectorWrapper,
	Image
} from '../Styles/styles';

////
export default function MovieDetails() {
	const { id } = useParams();
	const historyButton = useHistory();

	const [ statusFetchMovieDetails, setStatusFetchMovieDetails ] = useState('idle');
	const [ movieDetails, setMovieDetails ] = useState({});
	const [ favorite, setFavorite ] = useState('');

	const fetchMovie = useCallback(async (id) => {
		setStatusFetchMovieDetails('loading');
		try {
			const fetchMovie = await fetch(`http://www.omdbapi.com/?apikey=b5979027&i=${id}&plot=full`);
			const movie = await fetchMovie.json();

			if (movie.Response === 'True') {
				setMovieDetails(movie);
				setStatusFetchMovieDetails('resolved');
			} else {
				console.log('MOVIE not found');
			}
			setStatusFetchMovieDetails('idle');
		} catch (error) {
			setStatusFetchMovieDetails('rejected');
		}
	}, []);

	useEffect(
		() => {
			fetchMovie(id);
		},
		[ fetchMovie, id ]
	);

	////
	useEffect(
		() => {
			JSON.parse(localStorage.getItem(id)) && setFavorite(id);
		},
		[ id ]
	);

	const favoriteHandle = () => {
		if (JSON.parse(localStorage.getItem(id)) === null) {
			localStorage.setItem(id, true);
			setFavorite(id);
		} else {
			localStorage.removeItem(id);
			setFavorite([]);
		}
	};

	////
	return (
		<ContainerMovieDetails>
			<ButtonLink onClick={() => historyButton.goBack()} icon='fa fa-long-arrow-left' />

			{statusFetchMovieDetails === 'loading' && statusFetchMovieDetails !== 'idle' ? (
				<LoadingDIV>
					<div className='loader'> Loading... </div>
				</LoadingDIV>
			) : (
				<Fragment>
					<TimeYearRated>
						<TimeYear>{movieDetails.Runtime}</TimeYear>
						<Dot />
						<TimeYear>{movieDetails.Year}</TimeYear>
						<Dot />
						<Rated>{movieDetails.Rated}</Rated>
					</TimeYearRated>

					<MainTitle>{movieDetails.Title}</MainTitle>

					<LabelsGridWrapper>
						<LabelsFlexWrapper>
							<Fragment>
								<ImdbLabel>
									<img src='images/imdb.svg' alt='imdb' />
								</ImdbLabel>
								<ImdbRating>
									{movieDetails.Ratings !== undefined &&
										movieDetails.Ratings[0] !== undefined &&
										movieDetails.Ratings[0].Value}
								</ImdbRating>
							</Fragment>
							<Fragment>
								<TomatoesLabel>
									<img src='images/tomatoes.svg' alt='tomatoes' />
								</TomatoesLabel>
								<TomatoesRating>
									{movieDetails.Ratings !== undefined &&
										movieDetails.Ratings[1] !== undefined &&
										movieDetails.Ratings[1].Value}
								</TomatoesRating>
							</Fragment>

							<Fragment>
								{favorite.indexOf(id) !== -1 ? (
									<ButtonPrimary onClick={favoriteHandle} isActive icon='fa fa-heart'>
										<p>Added</p>
									</ButtonPrimary>
								) : (
									<ButtonPrimary onClick={favoriteHandle} icon='fa fa-heart-o'>
										<p>Add to favorites</p>
									</ButtonPrimary>
								)}
							</Fragment>
						</LabelsFlexWrapper>
					</LabelsGridWrapper>

					<PlotWrapper>
						<SecondaryTitle>Plot</SecondaryTitle>
						<Text>{movieDetails.Plot}</Text>
					</PlotWrapper>

					<CastWrapper>
						<SecondaryTitle>CAST:</SecondaryTitle>
						<Text>{movieDetails.Actors}</Text>
					</CastWrapper>

					<GenreWrapper>
						<SecondaryTitle>GENRE:</SecondaryTitle>
						<Text>{movieDetails.Genre}</Text>
					</GenreWrapper>

					<DirectorWrapper>
						<SecondaryTitle>DIRECTOR:</SecondaryTitle>
						<Text>{movieDetails.Director}</Text>
					</DirectorWrapper>

					<Image>
						<img alt={movieDetails.Title} src={movieDetails.Poster} />
					</Image>
				</Fragment>
			)}
		</ContainerMovieDetails>
	);
}
