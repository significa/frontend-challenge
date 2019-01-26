import React from 'react'
import Container from 'components/Container'
import { Row, Cell } from 'components/Grid'

const App = () => (
	<Container>
		<Row>
			{Array(24).fill().map((e,i)=>i+1).map(x =>
				<Cell xs={12} sm={6} md={4} lg={3} xg={2}>{x}</Cell>
			)}
		</Row>
	</Container>
)

export default App
