import React from 'react'

const Heart = ({
	size = 24,
	filled = false,
	color = 'currentColor',
	strokeWidth = '2',
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
		<path
			strokeWidth={strokeWidth}
			stroke={color}
			fill={filled ? color : 'none'}
			d='M12 5.74C24.32-3.88 26.31 14.49 12 20-2.31 15.57-.32-3.88 12 5.74z'
		/>
	</svg>
)

export default Heart
