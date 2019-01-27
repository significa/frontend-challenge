import React from 'react'

const Heart = ({
	size = 24,
	filled = false,
	color = 'currentColor',
	style,
	...props
}) => (
	<svg
		viewBox='0 0 24 24'
		strokeLinecap='round'
		strokeLinejoin='round'
		width={size}
		height={size}
		style={{display: 'block', ...style}}
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<g stroke={color} strokeWidth='2' fill='none'>
			<path d='M9 19.07L1.93 12 9 4.93'/>
			<path d='M3 12h20'/>
		</g>
	</svg>
)

export default Heart
