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
	margin: 1rem 0.5rem;
	outline: none;
	&:focus{box-shadow: inset 0 0 0 0.125rem ${p => p.theme.colors.yellow}}
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
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
`

const Button = ({logo, background, children, imdb}) => (
	<Wrapper tabIndex={0} href={`https://imdb.com/title/${imdb}/`}>
		{logo && <Left background={background}>{logo}</Left>}
		<Right><Text weight={500}>{children}</Text></Right>
	</Wrapper>
)

export default Button
