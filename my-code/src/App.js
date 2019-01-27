import React, { Fragment } from 'react'
import Navbar from 'components/Navbar'
import { useUrlState } from 'with-url-state'
import posed, {PoseGroup} from 'react-pose'
import SearchView from 'components/SearchView'
import DetailView from 'components/DetailView'

const Pose = posed.div({
	enter: {opacity: 1},
	exit: {opacity: 0},
})

const App = () => {
	const [urlState] = useUrlState()
	return(
		<Fragment>
			<Navbar/>
			<PoseGroup>
				{!urlState.id && <Pose key='search'><SearchView/></Pose>}
				{urlState.id && <Pose key={urlState.id}><DetailView/></Pose>}
			</PoseGroup>
		</Fragment>
	)
}

export default App
