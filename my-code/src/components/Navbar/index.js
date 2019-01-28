import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import Container from 'components/Container'
import { Logo } from 'components/Icon'

const Wrapper = styled.div`
	padding: 1.5rem 0;
`

const StyledLink = styled(Link)`
	display: inline-block;
	text-decoration: none;
	color: currentColor;
	margin: -0.5rem;
	padding: 0.5rem;
	border-radius: 2rem;
	&:focus{${p => p.theme.focusShadow}}
`

const Navbar = () => (
	<Wrapper>
		<Container>
			<StyledLink tabIndex={0} to='/'><Logo/></StyledLink>
		</Container>
	</Wrapper>
)

export default Navbar
