import React from 'react'
import styled from 'styled-components'
import Container from 'components/Container'
import Text from 'components/Text'
import { Dead } from 'components/Icon'

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

const ErrorState = props => (
	<Wrapper {...props}>
		<Dead size={96} style={{margin: '2rem'}}/>
		<Text xs={1} md={2} weight={600} style={{margin: '1rem 0 0.5rem'}}>
			I'm sorry Dave
		</Text>
		<Text color={p => p.theme.colors.lightGrey}>
			I'm afraid i can’t do that
		</Text>
	</Wrapper>
)

export default ErrorState
