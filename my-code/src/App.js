import React, { Fragment } from 'react'
import { useInputState } from 'utils/hooks'
import Navbar from 'components/Navbar'
import Searchbar from 'components/Searchbar'
import EmptyState from 'components/EmptyState'

const App = () => {
	const [search, setSearch] = useInputState('')
	return(
		<Fragment>
			<Navbar/>
			<Searchbar value={search} onChange={setSearch}/>
			{!search && <EmptyState/>}
		</Fragment>
	)
}

export default App
