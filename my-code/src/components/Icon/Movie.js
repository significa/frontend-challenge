import React from 'react'

const Movie = ({
	size = 48,
	filled = false,
	color = 'currentColor',
	strokeWidth = 2,
	style,
	...props
}) => (
	<svg
		viewBox='0 0 48 48'
		strokeLinecap='round'
		strokeLinejoin='round'
		width={size}
		height={size}
		style={{display: 'block', ...style}}
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			stroke={color}
			strokeWidth={strokeWidth}
			fill='none'
			d='M2 2v44M46 2v44M10 2h28v44H10zM2 24h44M2 16h8M2 8h8M38 16h8M38 8h8M38 40h8M38 32h8M2 40h8M2 32h8'
		/>
	</svg>
)

export default Movie
