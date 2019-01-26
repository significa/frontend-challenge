import React, { Fragment } from 'react'
import { useFetch } from 'react-hooks-fetch'
import { useInputState } from 'utils/hooks'
import Navbar from 'components/Navbar'
import Searchbar from 'components/Searchbar'
import InitState from 'components/InitState'
import EmptyState from 'components/EmptyState'
import ErrorState from 'components/ErrorState'
import Container from 'components/Container'
import { Row, Cell } from 'components/Grid'
import Card from 'components/Card'
import { Dead } from 'components/Icon'

const App = () => {
	const [search, setSearch] = useInputState('hey')
	const { error, loading, data } = useFetch([
		`https://api.themoviedb.org/3/search/movie`,
		`?api_key=${process.env.REACT_APP_TMDB_KEY}`,
		`&query=${search}`,
	].join(''))

	return(
		<Fragment>
			<Navbar/>
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
			{/* {!!search && <pre>{JSON.stringify({error, loading, data}, null , 2)}</pre>} */}
			{!search && <InitState/>}
			{search && error && <ErrorState/>}
			{data && !data.results.length && <EmptyState/>}
		</Fragment>
	)
}

export default App
