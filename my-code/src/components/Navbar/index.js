import React from 'react'
import styled from 'styled-components'
import Container from 'components/Container'
import Logo from 'components/Logo'

const Wrapper = styled.div`
	padding: 1.5rem 0;
`

const Navbar = () => (
	<Wrapper>
		<Container>
			<Logo/>
		</Container>
	</Wrapper>
)

export default Navbar
