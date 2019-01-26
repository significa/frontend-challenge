import React, { Fragment } from 'react'
import Navbar from 'components/Navbar'
import Searchbar from 'components/Searchbar'
import EmptyState from 'components/EmptyState'

const App = () => {
	return(
		<Fragment>
			<Navbar/>
			<Searchbar/>
			<EmptyState/>
		</Fragment>
	)
}

export default App
