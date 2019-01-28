import React from 'react'

const Dead = ({
	size = 72,
	filled = false,
	color = 'currentColor',
	style,
	...props
}) => (
	<svg
		viewBox='0 0 72 72'
		strokeLinecap='round'
		strokeLinejoin='round'
		width={size}
		height={size}
		style={{display: 'block', ...style}}
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			stroke={color} strokeWidth='6' fill='none' fillRule='evenodd' strokeLinecap='round' stroke-linejoin='round'
			d='M60 65c-3.17-11.58-12.71-20-24-20-11.28 0-20.83 8.41-24 20M20 7L3 24M69 7L52 24M69 24L52 7M20 24L3 7'
		/>
	</svg>
)

export default Dead
