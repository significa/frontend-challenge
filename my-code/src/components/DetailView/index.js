import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useFetch } from 'react-hooks-fetch'
import { useUrlState } from 'with-url-state'
import Searchbar from 'components/Searchbar'
import Container from 'components/Container'
import { Row, Cell } from 'components/Grid'
import Card from 'components/Card'

const Wrapper = styled.div`
	flex: 1
	display: flex;
	flex-direction: column;
	transition: 0.3s all;
	${p => p.hidden && `
		opacity: 0;
		flex: 0;
		height: 0;
		pointer-events: none;
	`}
`

const SearchView = () => {
	const [urlState, setUrlState] = useUrlState()

	const { error, loading, data } = useFetch([
		`https://api.themoviedb.org/3/search/movie`,
		`?api_key=${process.env.REACT_APP_TMDB_KEY}`,
		`&query=${urlState.id}`,
	].join(''))


	return(
		<Wrapper hidden={!urlState.id}>
			<Container>
				<Row vertical-gutter style={{marginTop: '2rem', marginBottom: '2rem'}}>
					<Cell>id:{JSON.stringify(urlState.id)}</Cell>
				</Row>
			</Container>
			{error && <div>error</div>}
		</Wrapper>
	)
}

export default SearchView
