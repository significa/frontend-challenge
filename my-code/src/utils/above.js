import { css } from 'styled-components'
import { stringify, parse } from './pixels'

export const utility = breakpoints => Object.keys(breakpoints).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${stringify(parse(breakpoints[label].width))}) {
			${css(...args)}
		}
	`
	return acc
}, {})

export const above = (label) => (...args) => ({theme}) => css`
	@media (min-width: ${stringify(parse(theme.breakpoints[label].width))}) {
		${css(...args)}
	}
`

export default above
