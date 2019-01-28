import React from 'react'
import styled from 'styled-components'
import { Location, Link } from '@reach/router'
import Container from 'components/Container'
import { Logo, Heart } from 'components/Icon'

const Wrapper = styled.div`
	padding: 1.5rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const StyledLink = styled(Link)`
	display: block;
	text-decoration: none;
	color: currentColor;
	margin: -0.5rem;
	padding: 0.5rem;
	border-radius: 2rem;
	&:focus{${p => p.theme.focusShadow}}
`

const Navbar = () => (
	<Container>
		<Wrapper>
			<StyledLink tabIndex={0} to='/'><Logo/></StyledLink>
			<Location>
				{({location}) => (
					<StyledLink style={{padding:'0.75rem', margin: '-0.75rem'}} tabIndex={0} to={location.pathname === '/favorites' ? '/' : '/favorites'}>
						<Heart filled={location.pathname === '/favorites'} style={{transform: 'translateY(1px)'}}/>
					</StyledLink>
				)}
			</Location>
		</Wrapper>
	</Container>
)

export default Navbar
