import React, { Fragment } from 'react'
import { useFetch } from 'react-hooks-fetch'
import { useInputState } from 'utils/hooks'
import Navbar from 'components/Navbar'
import Searchbar from 'components/Searchbar'
import EmptyState from 'components/EmptyState'

const App = () => {
	const [search, setSearch] = useInputState('')

	const { error, loading, data } = useFetch([
		`https://api.themoviedb.org/3/search/movie`,
		`?api_key=${process.env.REACT_APP_TMDB_KEY}`,
		`&query=${search}`,
	].join(''))

	return(
		<Fragment>
			<Navbar/>
			<Searchbar value={search} onChange={setSearch}/>
			{search && <pre>{JSON.stringify({error, loading, data}, null , 2)}</pre>}
			{!search && <EmptyState/>}
		</Fragment>
	)
}

export default App
