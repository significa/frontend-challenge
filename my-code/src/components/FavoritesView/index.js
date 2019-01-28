import React, { Fragment, useEffect } from 'react'
import styled from 'styled-components'
import { useFetch } from 'react-hooks-fetch'
import { useInputState } from 'utils/hooks'
import { Provider as FavoritesProvider, useFavorites } from 'utils/favorites'
import Searchbar from 'components/Searchbar'
import Container from 'components/Container'
import { Row, Cell } from 'components/Grid'
import FetchCard from 'components/Card/FetchCard'
import ErrorState from 'components/ErrorState'
import Text from 'components/Text'
import Empty from './Empty'

const Wrapper = styled.div`
	flex: 1
	display: flex;
	flex-direction: column;
	transition: 0.2s all;
`

const getTitle = length => `${!length ? 'no favorites' : `${length} ${length > 1 ? `favorites`: `favorite`}`}`

const SearchView = () => {
	const [favoritesSet] = useFavorites()
	const favorites = [...favoritesSet] || []
	useEffect(() => {document.title = 'What’s in ⠿ ' + getTitle(favorites.length)}, [favorites.length])

	return(
		<Wrapper>
			<Container>
				{!favorites.length ? <Empty/> : (
					<Fragment>
						<Text weight={600} xs={2} sm={3} md={4} xg={5}>{getTitle(favorites.length)}</Text>
						<Row vertical-gutter style={{marginTop: '2rem', marginBottom: '2rem'}}>
							{favorites.map(movieId => (
								<Cell key={movieId} xs={6} sm={4} md={3} xg={2}>
									<FetchCard movieId={movieId}/>
								</Cell>
							))}
						</Row>
					</Fragment>
				)}
			</Container>
		</Wrapper>
	)
}

export default SearchView
