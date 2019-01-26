import React, { Fragment } from 'react'
import Navbar from 'components/Navbar'
import SearchView from 'components/SearchView'
import DetailView from 'components/DetailView'

const App = () => {

	return(
		<Fragment>
			<Navbar/>
			<SearchView/>
			<DetailView/>
		</Fragment>
	)
}

export default App
