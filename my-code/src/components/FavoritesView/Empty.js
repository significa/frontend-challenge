import React from 'react'
import styled from 'styled-components'
import Container from 'components/Container'
import Text from 'components/Text'
import { HeartBreak } from 'components/Icon'

const Wrapper = styled(Container)`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 4rem auto;
	text-align: center;
	svg{
		color: ${p => p.theme.colors.grey}
	}
`

const EmptyState = props => (
	<Wrapper {...props}>
		<HeartBreak size={96} style={{margin: '1rem'}}/>
		<Text xs={1} md={2} weight={600} style={{margin: '1rem 0 0.5rem'}}>
			You still have no favorites
		</Text>
		<Text color={p => p.theme.colors.lightGrey}>
			you can add movies to your favorites clicking on the ♥ icon
		</Text>
	</Wrapper>
)

export default EmptyState
