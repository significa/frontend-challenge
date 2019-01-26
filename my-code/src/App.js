import React, { Fragment } from 'react'
import Navbar from 'components/Navbar'
import Container from 'components/Container'
import { Row, Cell } from 'components/Grid'
import Searchbar from 'components/Searchbar'
import Text from 'components/Text'
import EmptyState from 'components/EmptyState'

const App = () => (
	<Fragment>
		<Navbar/>
		<Searchbar/>
		<EmptyState/>
	</Fragment>
)

export default App
