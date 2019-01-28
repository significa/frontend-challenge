import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { useFetch } from 'react-hooks-fetch'
import Container from 'components/Container'
import { Arrow, IMDB } from 'components/Icon'
import { Row, Cell } from 'components/Grid'
import Text from 'components/Text'
import Button from 'components/Button'
import ToggleButton from 'components/ToggleButton'
import ErrorState from 'components/ErrorState'
import Meta from './Meta'
import Info from './Info'
import Image from './Image'


const Wrapper = styled.div`
	flex: 1
	display: flex;
	flex-direction: column;
	transition: 0.2s all;
	margin-bottom: ${p => p.error ? 0 : '6rem'};
`

const BackLink = styled(Link)`
	text-decoration: none;
	color: ${p => p.theme.colors.lightGrey};
	cursor: pointer;
	display: block;
	border-radius: 0.25rem;
	margin-left: -0.5rem;
	padding: 0.75rem 0 0.75rem 0.5rem;
	&:hover{
		color: ${p => p.theme.colors.white};
	}
	&:focus{${p => p.theme.focusShadow}}
`


const DetailView = ({movieId}) => {
	const { error, loading, data } = useFetch([
		`https://api.themoviedb.org/3/movie/${movieId}`,
		`?api_key=${process.env.REACT_APP_TMDB_KEY}`,
		`&append_to_response=release_dates,external_ids,credits`
	].join(''))

	/* eslint-disable no-mixed-operators */
	const image = data && data.poster_path || ''
	/* eslint-enable */

	return(
		<Wrapper error={error}>
			<Container>
				<BackLink tabIndex={0} to='/'><Arrow/></BackLink>
				{!loading && data && (
					<Row style={{justifyContent: 'space-between'}}>
						<Cell xs={12} md={6}>
							<Meta {...data}/>
							<Text weight={600} xs={2} sm={3} md={4} xg={5}>{data.title}</Text>
							<div style={{display: 'flex', margin: '1rem -0.5rem'}}>
								{!!data.vote_average && (
									<Button id={data.imdb_id} background='#FF9F1C' logo={<IMDB color='#0A1014'/>}>
										{data.vote_average}/10
									</Button>
								)}
								<ToggleButton id={data.id}/>
							</div>
							<Info {...data}/>
						</Cell>
						<Cell xs={12} sm={12} md={5} lg={5}>
							<Image alt={`poster for the movie: ${data.title}`} image={image}/>
						</Cell>
					</Row>
				)}
			</Container>
			{error && (
				<Container style={{flex: 1}}>
					<ErrorState/>
				</Container>
			)}
		</Wrapper>
	)
}

export default DetailView
