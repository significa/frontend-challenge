import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useFetch } from 'react-hooks-fetch'
import { useUrlState } from 'with-url-state'
import { useInputState } from 'utils/hooks'
import posed from 'react-pose'
import Searchbar from 'components/Searchbar'
import Container from 'components/Container'
import { Row, Cell } from 'components/Grid'
import Card from 'components/Card'
import Intro from './Intro'
import Empty from './Empty'
import ErrorState from './ErrorState'

const Transition = posed.div({
	visible: { height: 'auto', overflow: 'hidden' },
	hidden: { height: 0, overflow: 'hidden' },
})

const Wrapper = styled.div`
	flex: 1
	display: flex;
	flex-direction: column;
	transition: 0.2s all;
	${p => p.hidden && `opacity: 0;`}
`

const SearchView = () => {
	const [search, setSearch] = useInputState('hey')
	const { error, loading, data } = useFetch([
		`https://api.themoviedb.org/3/search/movie`,
		`?api_key=${process.env.REACT_APP_TMDB_KEY}`,
		`&query=${search}`,
	].join(''))

	const [urlState] = useUrlState()

	return(
		<Transition pose={urlState.id ? 'hidden' : 'visible'}>
			<Wrapper hidden={urlState.id}>
				<Searchbar value={search} onChange={setSearch}/>
				<Container>
					<Row vertical-gutter style={{marginTop: '2rem', marginBottom: '2rem'}}>
						{(search && !loading && data) && (
							data.results.map(({id, title, poster_path, release_date}) => (
								<Cell key={id} xs={6} sm={4} md={3} xg={2}>
									<Card
										id={id}
										title={title}
										image={poster_path}
										year={release_date.split('-')[0]}
									/>
								</Cell>
							)
						))}
						{search && loading && new Array(12).fill(0).map((x, i) => (
							<Cell key={i} xs={6} sm={4} md={3} xg={2}><Card loading/></Cell>
						))}
					</Row>
				</Container>
				{!search && <Intro/>}
				{search && error && <ErrorState/>}
				{data && !data.results.length && <Empty/>}
			</Wrapper>
		</Transition>
	)
}

export default SearchView
