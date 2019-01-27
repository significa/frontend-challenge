import React from 'react'
import styled from 'styled-components'
import { useFetch } from 'react-hooks-fetch'
import { useUrlState } from 'with-url-state'
import Container from 'components/Container'
import { Arrow } from 'components/Icon'
import { Row, Cell } from 'components/Grid'
import Text from 'components/Text'
import Meta from './Meta'
import Section from './Section'


const Wrapper = styled.div`
	flex: 1
	display: flex;
	flex-direction: column;
	transition: 0.2s all;
	margin-bottom: 6rem;
`

const ArrowWrapper = styled.div`
	color: ${p => p.theme.colors.lightGrey};
	cursor: pointer;
	display: block;
	&:hover{
		color: ${p => p.theme.colors.white};
	}
`

const Image = styled.img`
	display: block;
	border-radius: 0.25rem;
	overflow: hidden;
	width: 100%;
	height: auto;
`

const DetailView = () => {
	const [urlState, setUrlState] = useUrlState()

	const { error, loading, data } = useFetch([
		`https://api.themoviedb.org/3/movie/${urlState.id}`,
		`?api_key=${process.env.REACT_APP_TMDB_KEY}`,
		`&append_to_response=release_dates,external_ids`
	].join(''))

	// is not advised to pass conditionals before a hook, but it just works :shrug:
	const omdb = !loading && data && data.imdb_id && useFetch([
		`http://omdbapi.com/`,
		`?apikey=${process.env.REACT_APP_OMDB_KEY}`,
		`&i=${data.imdb_id}`,
	].join(''))

	/* eslint-disable no-mixed-operators */
	const plot = (omdb && omdb.data && omdb.data.Plot) || (data && data.overview) || ''
	const genres = data && data.genres.map(x => x.name) || []
	const actors = omdb && omdb.data && omdb.data.Actors.split(', ') || []
	const directors = omdb && omdb.data && omdb.data.Director.split(', ') || []
	const image = data && data.poster_path || ''
	/* eslint-enable */

	return(
		<Wrapper>
			<Container>
				<ArrowWrapper onClick={() => setUrlState({index: 1})}>
					<Arrow/>
				</ArrowWrapper>
				{!loading && data && (
					<Row style={{justifyContent: 'space-between'}}>
						<Cell xs={12} md={6}>
							<Meta {...data}/>
							<Text weight={600} xs={2} sm={3} md={4} xg={5}>
								{data.title}
							</Text>
							<Row>
								<Cell lg={10}>
									{plot && <Section title='Plot'>{plot}</Section>}
									<Row style={{justifyContent: 'space-between'}}>
										{!!genres.length && (
											<Cell>
												<Section title='Genres'>
													{genres.map(genre => <div key={genre}>{genre}</div>)}
												</Section>
											</Cell>
										)}
										{!!actors.length && (
											<Cell>
												<Section title='Actors'>
													{actors.map(actor => <div key={actor}>{actor}</div>)}
												</Section>
											</Cell>
										)}
										{!!directors.length && (
											<Cell>
												<Section title='Directors'>
													{directors.map(director => <div key={director}>{director}</div>)}
												</Section>
											</Cell>
										)}
									</Row>
								</Cell>
							</Row>
						</Cell>
						<Cell xs={12} sm={12} md={5} lg={5}>
							{image && <Image src={`https://image.tmdb.org/t/p/w500/${image}`}/>}
						</Cell>
					</Row>
				)}
				{/* <pre>{JSON.stringify({data}, null, 2)}</pre>
				<pre>{JSON.stringify({omdb}, null, 2)}</pre> */}
			</Container>
			{error && <div>error</div>}
		</Wrapper>
	)
}

export default DetailView
