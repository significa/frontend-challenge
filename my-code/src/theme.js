export const fontStack = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"

export const maxWidth = '1180px'

export const colors = {
	// main colors
	yellow:    '#FF9F1C',
	red:       '#FF4040',
	green:     '#2EC4B6',
	// grey colors
	dark:      '#0A1014',
	grey:      '#1B2329',
	midGrey:   '#353F4C',
	lightGrey: '#7A8C99',
	white:     '#FFFFFF',
}

export const fonts = {
	default: `"Roboto", ${fontStack}`,
}

export const typography = {
	0: {fontSize: '1.00rem', lineHeight: '1.500rem', letterSpacing: '0.0100em'},
	1: {fontSize: '1.25rem', lineHeight: '1.750rem', letterSpacing: '0.0100em'},
	2: {fontSize: '1.50rem', lineHeight: '1.875rem', letterSpacing: '0.0075em'},
	3: {fontSize: '2.25rem', lineHeight: '3.000rem', letterSpacing: '0.0100em'},
	4: {fontSize: '3.00rem', lineHeight: '3.750rem', letterSpacing: '0.0100em'},
	5: {fontSize: '5.00rem', lineHeight: '5.500rem', letterSpacing: '0.0100em'},
}

export const columns = 12

export const breakpoints = {
	xs: { width:  '0rem', gutter: 16 },
	sm: { width: '30rem', gutter: 20 },
	md: { width: '48rem', gutter: 20 },
	lg: { width: '62rem', gutter: 20 },
	xg: { width: '80rem', gutter: 20 },
}

export const focusShadow = `
	outline: none;
	box-shadow: 0 0 0 0.125rem ${colors.yellow};
`
