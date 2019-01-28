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
	svg{
		color: ${p => p.theme.colors.grey}
	}
`

const InfoScreen = ({icon, title, description, noMargin, ...props}) => (
	<Wrapper {...props}>
		{icon && <div style={{margin: !noMargin && '2rem'}}>{icon}</div>}
		{title && <Text xs={1} md={2} weight={600} style={{margin: '1rem 0 0.5rem'}}>{title}</Text>}
		{description && <Text color={p => p.theme.colors.lightGrey}>{description}</Text>}
	</Wrapper>
)

export default InfoScreen
