export const parse = (value = 0) => {
	const type = typeof value
	if(type === 'number') return value
	if(type !== 'string') return 0
	if(/^\d+px/.test(value)) return parseFloat(value, 10)
	if(/^\d+rem/.test(value)) return parseFloat(value) * 16
	return value
}

export const stringify = (value = 0) => (
	!!parse(value)
		? `${parse(value)}px`
		: value
)
