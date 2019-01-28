import React, { Fragment } from 'react'
import Navbar from 'components/Navbar'
import { Router, Location } from '@reach/router'
import posed, {PoseGroup} from 'react-pose'
import SearchView from 'components/SearchView'
import DetailView from 'components/DetailView'

const RouteContainer = posed.div({
	enter: {opacity: 1},
	exit: {opacity: 0},
})

const App = () => (
	<Fragment>
		<Navbar/>
		<Location>
			{({location}) => (
				<PoseGroup>
					<RouteContainer key={location.key}>
						<Router location={location}>
							<SearchView path='/'/>
							<DetailView path='/:movieId'/>
						</Router>
					</RouteContainer>
				</PoseGroup>
			)}
		</Location>
	</Fragment>
)


export default App
