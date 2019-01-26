import React from 'react'
import styled from 'styled-components'
import { useUrlState } from 'with-url-state'
import Container from 'components/Container'
import { Logo } from 'components/Icon'

const Wrapper = styled.div`
	padding: 1.5rem 0;
`

const Navbar = () => {
	const [, setUrlState] = useUrlState()
	return(
		<Wrapper>
			<Container>
				<Logo onClick={() => setUrlState({index:1})}/>
			</Container>
		</Wrapper>
	)
}

export default Navbar
