import React, { useEffect, useState, Fragment } from 'react'
import styled from 'styled-components'
import { useFetch } from 'react-hooks-fetch'
import { useInputState } from 'utils/hooks'
import Searchbar from 'components/Searchbar'
import Container from 'components/Container'
import { Row, Cell } from 'components/Grid'
import Card from 'components/Card'
import InfoScreen from 'components/InfoScreen'
import { FightClub, Dead } from 'components/Icon'
import CardsByPage from './CardsByPage'

const Wrapper = styled.div`
	flex: 1
	display: flex;
	flex-direction: column;
	transition: 0.2s all;
`

const Image = styled.img`
	display: block;
	max-width: 80%;
	margin: 0 auto;
`

const SearchView = () => {
	useEffect(() => {document.title = `What’s in`}, [])
	const [search, setSearch] = useInputState('')
	const { error, loading, data } = useFetch([
		`https://api.themoviedb.org/3/search/movie`,
		`?api_key=${process.env.REACT_APP_TMDB_KEY}`,
		`&query=${search}`,
	].join(''))

	const [count, setCount] = useState(1)

	return(
		<Wrapper>
			<Searchbar value={search} onChange={setSearch} style={{top: '1rem', position: 'sticky', zIndex: 1}}/>
			<Container>
				<Row vertical-gutter style={{marginTop: '2rem', marginBottom: '2rem'}}>
					<CardsByPage search={search} page={1}/>
					{(search && !loading && data?.results) && (
						<Fragment>
							{count > 1 && Array(count).fill(0).map((x, i) => i+2).map(page => (
								<CardsByPage search={search} page={page}/>
							))}
							<Cell xs={6} sm={4} md={3} xg={2}>
								<Card onClick={() => setCount(count + 1)} loadMore/>
							</Cell>
						</Fragment>
					)}

					{search && loading && new Array(20).fill(0).map((x, i) => (
						<Cell key={i} xs={6} sm={4} md={3} xg={2}><Card loading/></Cell>
					))}
				</Row>
			</Container>
			{!search && <InfoScreen noMargin icon={<Image src='/assets/images/empty-state.png'/>} title='Don’t know what to search?' description='Here’s an offer you can’t refuse'/>}
			{search && error && <InfoScreen icon={<Dead size={96} style={{margin: '2rem'}}/>} title='I’m sorry Dave' description='I’m afraid i can’t do that'/>}
			{data && !data?.results?.length && <InfoScreen icon={<FightClub size={128} style={{margin: '1rem'}}/>} title='I am Jack’s complete lack of surprise' description='I think you better search something else'/>}
		</Wrapper>
	)
}

export default SearchView
