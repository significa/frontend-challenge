const fontStack = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"

const theme = {
	maxWidth: '1180px',
	colors: {
		// main colors
		yellow:    '#FF9F1C',
		red:       '#FF4040',
		green:     '#2EC4B',
		// grey colors
		dark:      '#0A1014',
		grey:      '#1B2329',
		midGrey:   '#353F4C',
		lightGrey: '#7A8C99',
		white:     '#FFFFFF',
	},
	fonts: {
		default: `"Roboto", ${fontStack}`,
	},
	columns: 16,
	breakpoints: {
		xs: { width:  '0rem', gutter: 1.00 },
		sm: { width: '30rem', gutter: 1.25 },
		md: { width: '48rem', gutter: 1.25 },
		lg: { width: '62rem', gutter: 1.25 },
		xg: { width: '80rem', gutter: 1.25 }
	}

}

export default theme
