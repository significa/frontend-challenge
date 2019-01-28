import React, { Fragment, lazy, Suspense } from 'react'
import { Router, Location } from '@reach/router'
import posed, {PoseGroup} from 'react-pose'
import Navbar from 'components/Navbar'
import Loader from 'components/Loader'
const SearchView = lazy(() => import('components/SearchView'))
const FavoritesView = lazy(() => import('components/FavoritesView'))
const DetailView = lazy(() => import('components/DetailView'))

const RouteContainer = posed.div({
	enter: {opacity: 1},
	exit: {opacity: 0},
})

const App = () => (
	<Fragment>
		<Navbar/>
		<Location>
			{({location}) => (
				<Suspense fallback={<Loader/>}>
					<PoseGroup>
						<RouteContainer key={location.key}>
							<Router location={location}>
								<SearchView path='/'/>
								<FavoritesView path='/favorites'/>
								<DetailView path='/:movieId'/>
							</Router>
						</RouteContainer>
					</PoseGroup>
				</Suspense>
			)}
		</Location>
	</Fragment>
)


export default App
