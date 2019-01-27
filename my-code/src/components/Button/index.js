import React from 'react'
import styled from 'styled-components'
import Text from 'components/Text'

const Wrapper = styled.a`
	display: inline-flex;
	color: currentColor;
	text-decoration: none;
	border-radius: 0.25rem;
	box-shadow: inset 0 0 0 1px ${p => p.theme.colors.midGrey};
	overflow: hidden;
	margin: 1rem;
`

const Left = styled.div`
	${'' /* margin: -1px 0 -1px -1px; */}
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${p => p.background};
	padding: 0.5rem;
`

const Right = styled.div`
	padding: 0.5rem;
`

const Button = ({logo, background, children, id}) => (
	<Wrapper href={`https://imdb.com/title/${id}/`}>
		{logo && <Left background={background}>{logo}</Left>}
		<Right><Text>{children}</Text></Right>
	</Wrapper>
)

export default Button
