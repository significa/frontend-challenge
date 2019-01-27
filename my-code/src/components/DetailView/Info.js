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


const Wrapper = styled.div``


const Info = data => {
	/* eslint-disable no-mixed-operators */
	// i really need optional chaining
	const plot = data && data.overview || ''
	const genres = data && data.genres.map(x => x.name) || []
	const actors = data && data.credits.cast.map(x => x.name).slice(0, 4) || []
	const directors = data && data.credits.crew.filter(x => x.department === 'Directing').map(x => x.name) || []
	/* eslint-enable */

	return(
		<Wrapper>
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
		</Wrapper>
	)
}

export default Info
