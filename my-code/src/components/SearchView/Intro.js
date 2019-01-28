import React from 'react'
import styled from 'styled-components'
import Container from 'components/Container'
import Text from 'components/Text'

const Wrapper = styled(Container)`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 4rem auto;
	text-align: center;
`

const Image = styled.img`
	display: block;
	max-width: 80%;
`

const EmptyState = props => (
	<Wrapper {...props}>
		<Image src='/assets/images/empty-state.png'/>
		<Text xs={1} md={2} weight={600} style={{margin: '1rem 0 0.5rem'}}>
			Don’t know what to search?
		</Text>
		<Text color={p => p.theme.colors.lightGrey}>
			Here’s an offer you can’t refuse
		</Text>
	</Wrapper>
)

export default EmptyState
