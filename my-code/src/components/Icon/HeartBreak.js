import React from 'react'

const HeartBreak = ({
	size = 24,
	color = 'currentColor',
	style,
	...props
}) => (
	<svg
		viewBox='0 0 24 24'
		fillRule='nonzero'
		width={size}
		height={size}
		style={{display: 'block', ...style}}
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			stroke={0}
			fill={color}
			d='M2.9 2.9L19.78 19.8c.21.2.21.54 0 .74a.53.53 0 0 1-.74 0l-2.96-2.96-3.37 3.38a1 1 0 0 1-1.42 0l-7.67-7.67a5.52 5.52 0 0 1 .18-8L2.16 3.66a.53.53 0 0 1 0-.75c.2-.2.54-.2.74 0zm9.45 16.9l2.99-2.96-10.8-10.8a4.49 4.49 0 0 0-.18 6.49l7.29 7.28c.2.2.5.2.7 0zm7.3-7.27a4.47 4.47 0 1 0-7.05-5.38c-.27.25-.47.38-.6.38s-.33-.13-.59-.38A4.46 4.46 0 0 0 7.53 4.9l-1.02.12-.86-.85a5.56 5.56 0 0 1 1.88-.32c1.84 0 3.47.98 4.47 2.37a5.57 5.57 0 0 1 4.47-2.37 5.53 5.53 0 0 1 3.9 9.43l-2.8 2.8-.74-.74 2.81-2.81z'
		/>
	</svg>
)

export default HeartBreak
