import React from 'react'
import styled from 'styled-components'
import Container from 'components/Container'
import Text from 'components/Text'
import { FightClub } from 'components/Icon'

const Wrapper = styled(Container)`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 4rem auto;
	svg{
		color: ${p => p.theme.colors.grey}
	}
`

const EmptyState = props => (
	<Wrapper {...props}>
		<FightClub size={128} style={{margin: '1rem'}}/>
		<Text xs={1} md={2} weight={600} style={{margin: '1rem 0 0.5rem'}}>
			I am Jack's complete lack of surprise
		</Text>
		<Text color={p => p.theme.colors.lightGrey}>
			I think you better search something else
		</Text>
	</Wrapper>
)

export default EmptyState
