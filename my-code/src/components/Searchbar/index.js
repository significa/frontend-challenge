import React from 'react'
import styled from 'styled-components'
import Container from 'components/Container'

const Wrapper = styled.label`
	background: ${p => p.theme.colors.white};
	color: ${p => p.theme.colors.lightGrey};
	display: flex;
	align-items: center;
	padding: 0.75rem;
	border-radius: 0.25rem;
	position: relative;
	box-shadow: 0 0 4rem 0.125rem ${p => p.theme.colors.dark};
	&:focus-within{
		&:before{
		content: '';
		border-radius: 0.25rem;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		${p => p.theme.focusShadow}}
		}
	}
`


const Loupe = () => (
	<svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'>
		<g fill='none' stroke='currentColor' strokeWidth='2'>
			<path d='M14.5 14.5l-3.72-3.72'/>
			<circle cx='6.67' cy='6.67' r='5.33'/>
		</g>
	</svg>
)

const Input = styled.input`
	color: ${p => p.theme.colors.dark};
	border: none;
	background: none;
	margin-left: 0.75rem;
	outline: none;
	flex: 1;
	${p => p.theme.typography[0]};
	&::placeholder{
		color: ${p => p.theme.colors.lightGrey};
	}
	&::selection{
		background: ${p => p.theme.colors.lightGrey};
		color: ${p => p.theme.colors.white};
	}
`

const Searchbar = ({...props}) => (
	<Container {...props}>
		<Wrapper>
			<Loupe/>
			<Input placeholder='Search movies...' {...props}/>
		</Wrapper>
	</Container>
)

export default Searchbar
