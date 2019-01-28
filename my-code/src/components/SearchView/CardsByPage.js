import React from 'react'
import { useFetch } from 'react-hooks-fetch'
import { Cell } from 'components/Grid'
import Card from 'components/Card'

const CardsByPage = ({search, page}) => {
	const { loading, data } = useFetch([
		`https://api.themoviedb.org/3/search/movie`,
		`?api_key=${process.env.REACT_APP_TMDB_KEY}`,
		`&query=${search}`,
		`&page=${page}`,
	].join(''))

	if(loading && page > 1) return (new Array(20).fill(0).map((x, i) => (
		<Cell key={i} xs={6} sm={4} md={3} xg={2}><Card loading/></Cell>
	)))

	if(!data?.results?.length) return null

	return(
		data?.results?.map(({id: movieId, title, poster_path, release_date}) => (
			<Cell key={movieId} xs={6} sm={4} md={3} xg={2}>
				<Card
					movieId={movieId}
					title={title}
					image={poster_path}
					year={release_date.split('-')[0]}
				/>
			</Cell>
		))
	)
}

export default CardsByPage
