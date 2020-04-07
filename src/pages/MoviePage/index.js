import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';

import {
	Container,
	GoBackButton,
	Movie,
	Details,
	Poster,
	Row,
	Title,
	Subtitle,
	Plot,
	List,
	Label,
	AddToFavouritesButton,
} from './styles';
import Logo from '../../components/Logo';

import { getMovieById } from '../../services/api';

import imdb from '../../assets/img/imdb.svg';

export default function MoviePage() {
	const { id } = useParams();
	const history = useHistory();
	const [movie, setMovie] = useState();
	const [favourite, setFavourite] = useState(false);

	const handleClick = useCallback(() => {
		history.push('/');
	}, [history]);

	const handleAddToFavourites = useCallback(() => {
		setFavourite(!favourite);
	}, [favourite]);

	useEffect(() => {
		getMovieById(id)
			.then(({ data }) => setMovie(data))
			.catch(() => history.push('/'));
	}, [history, id]);

	if (!movie) return null;

	const {
		runtime,
		release_date,
		adult,
		title,
		poster_path,
		overview,
		credits,
		genres,
		vote_average,
	} = movie;

	return (
		<Container>
			<Logo />

			<GoBackButton onClick={handleClick}>
				<MdArrowBack size={24} />
			</GoBackButton>

			<Movie>
				<Details>
					<Row>
						<span>{runtime} min</span>
						<span>{new window.Date(release_date).getFullYear()}</span>
						<span>{adult ? '18+' : 'R'}</span>
					</Row>

					<Title>{title}</Title>

					<Row>
						<Label>
							<img src={imdb} alt="Imdb icon" />
							<span>{vote_average}/10</span>
						</Label>
						<AddToFavouritesButton
							onClick={handleAddToFavourites}
							favourite={favourite}
						>
							{favourite ? (
								<IoIosHeart size={16} />
							) : (
								<IoIosHeartEmpty size={16} />
							)}
							<span>Add to favourites</span>
						</AddToFavouritesButton>
					</Row>

					<article>
						<Subtitle>Plot</Subtitle>
						<Plot>{overview}</Plot>
					</article>

					<Row>
						<List>
							<Subtitle>Cast</Subtitle>
							<ul>
								{credits.cast.slice(0, 8).map((item) => (
									<li key={`cast-${item.id}`}>{item.name}</li>
								))}
							</ul>
						</List>
						<List>
							<Subtitle>Genre</Subtitle>
							<ul>
								{genres.map((item) => (
									<li key={`genre-${item.id}`}>{item.name}</li>
								))}
							</ul>
						</List>
						<List>
							<Subtitle>Director</Subtitle>
							<ul>
								{credits.crew
									.filter((item) => item.job === 'Director')
									.map((item) => (
										<li key={`director-${item.id}`}>{item.name}</li>
									))}
							</ul>
						</List>
					</Row>
				</Details>

				<Poster source={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
			</Movie>
		</Container>
	);
}
