import React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
	height: 0;
	overflow: hidden;
	padding-top: ${p => `${1/p.ratio * 100}%`};
	position: relative;
`

const Inner = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`

const AspectRatio = ({ratio = 1, children, ...props}) => (
	<Outer ratio={ratio} {...props}>
		<Inner>{children}</Inner>
	</Outer>
)

export default AspectRatio
