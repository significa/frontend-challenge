import React from 'react'

const RottenTomatoes = ({
	size = 16,
	filled = false,
	color = 'currentColor',
	style,
	...props
}) => (
	<svg
		viewBox='0 0 16 16'
		strokeLinecap='round'
		strokeLinejoin='round'
		width={size}
		height={size}
		style={{display: 'block', ...style}}
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			fill={color}
			d='M5.36.44c3-.75 3.33 1.58 2.6 3.5-.76 2.76 2.07 2.7 2.28 1.15.41-2.12 2.22-3.07 3.63-1.88 1.44 1.4.81 4.2-2.04 3.92-1.84-.18-2.25 2.25.1 2.43 3.69.22 4.86 2.54 3.55 4.11-1.83 1.74-4.32-.5-5.22-2.23-.78-1.07-1.98 0-1.54.74 1.5 2.23.34 3.58-1.25 3.51-1.53-.1-2.4-1.04-1.51-3.34.44-1.43-.99-1.77-1.9-.63C2.7 13.97.75 13.3.16 12.2c-.37-.87-.33-2.96 2.77-2.71 1.91.47 1.35-1.44-.08-1.57C1.8 7.87-.65 7.1.23 5.11c.84-1.27 2.86-1.35 3.83.72.35.49.96 1.27 2.07.58.4-.6.13-1.6-1.01-2.31-1.57-.91-1.42-2.9.24-3.66z'
		/>
	</svg>
)

export default RottenTomatoes
