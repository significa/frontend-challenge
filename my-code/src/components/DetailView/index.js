import React from 'react'
import styled from 'styled-components'
import { useFetch } from 'react-hooks-fetch'
import { useUrlState } from 'with-url-state'
import Container from 'components/Container'
import { Arrow, IMDB } from 'components/Icon'
import { Row, Cell } from 'components/Grid'
import Text from 'components/Text'
import Button from 'components/Button'
import Meta from './Meta'
import Info from './Info'


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
		`&append_to_response=release_dates,external_ids,credits`
	].join(''))

	/* eslint-disable no-mixed-operators */
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
							<Text weight={600} xs={2} sm={3} md={4} xg={5}>{data.title}</Text>
							<div style={{display: 'flex', margin: '1rem -1rem'}}>
								{!!data.vote_average && (
									<Button id={data.imdb_id} background='#FF9F1C' logo={<IMDB color='#0A1014'/>}>
										{data.vote_average}/10
									</Button>
								)}
							</div>
							<Info {...data}/>
						</Cell>
						<Cell xs={12} sm={12} md={5} lg={5}>
							{image && <Image src={`https://image.tmdb.org/t/p/w500/${image}`}/>}
						</Cell>
					</Row>
				)}
			</Container>
			{error && <div>error</div>}
		</Wrapper>
	)
}

export default DetailView
