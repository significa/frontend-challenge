import React, { Fragment, lazy, Suspense } from 'react'
import { Router, Location } from '@reach/router'
import Navbar from 'components/Navbar'
import Loader from 'components/Loader'
const SearchView = lazy(() => import('components/SearchView'))
const FavoritesView = lazy(() => import('components/FavoritesView'))
const DetailView = lazy(() => import('components/DetailView'))

const App = () => (
	<Fragment>
		<Navbar/>
		<Location>
			{({location}) => (
				<Suspense fallback={<Loader/>}>
					<Router location={location}>
						<SearchView path='/'/>
						<FavoritesView path='/favorites'/>
						<DetailView path='/:movieId'/>
					</Router>
				</Suspense>
			)}
		</Location>
	</Fragment>
)


export default App
