import React from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';

import { Container, Description, Title, Year } from './styles';

export default function MovieCard({ id, title, release_date, poster_path }) {
	const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
	const year = String(new window.Date(release_date).getFullYear());

	return (
		<Container to={`/movie/${id}`} source={poster}>
			<Description>
				<button>
					<IoIosHeartEmpty size={20} />
				</button>

				<Title>{title}</Title>
				<Year>{year === 'NaN' ? 'Date unavailable' : year}</Year>
			</Description>
		</Container>
	);
}
