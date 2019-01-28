import React from 'react'
import { useFetch } from 'react-hooks-fetch'
import Card from './index'

const FetchCard = ({movieId}) => {
	const { error, loading, data } = useFetch([
		`https://api.themoviedb.org/3/movie/${movieId}`,
		`?api_key=${process.env.REACT_APP_TMDB_KEY}`,
	].join(''))

	if(loading) return <Card loading/>
	if(error) return <Card error/>

	const {title, poster_path, release_date} = data

	return (
		<Card
			movieId={movieId}
			title={title}
			image={poster_path}
			year={release_date.split('-')[0]}
		/>
	)
}

export default FetchCard
