import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import Container from 'components/Container'
import { Logo } from 'components/Icon'

const Wrapper = styled.div`
	padding: 1.5rem 0;
`

const StyledLink = styled(Link)`
	display: block;
	text-decoration: none;
	color: currentColor;
`

const Navbar = () => (
	<Wrapper>
		<Container>
			<StyledLink to='/'><Logo/></StyledLink>
		</Container>
	</Wrapper>
)

export default Navbar
