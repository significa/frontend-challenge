import styled, { css } from 'styled-components'
import { mapBreakpoints, mapPropsBreakpoints } from 'utils/breakpoints'
import { parse, stringify } from 'utils/pixels'

const getCellDisplay = p => p.flex ? 'flex' : 'block'

export const Cell = styled.div`
	box-sizing: border-box;
	${p => mapPropsBreakpoints(p.theme.breakpoints, (value, props) => `
		display: ${value > 0 ? getCellDisplay(props) : 'none'};
		width: ${(value / props.theme.columns || 1) * 100 + '%'};
	`)}
`

export const Row = styled.div`
	box-sizing: border-box;
	flex: 1;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	${p => !p['no-gutter'] && mapBreakpoints(p.theme.breakpoints, ({gutter}) => `
		margin-left: ${stringify(parse(gutter)/-2)};
		margin-right: ${stringify(parse(gutter)/-2)};
		max-width: calc(100% + ${stringify(parse(gutter))});
		& ${Cell} {
			padding-left: ${stringify(parse(gutter)/2)};
			padding-right: ${stringify(parse(gutter)/2)};
		}
	`)}
	${p => !p['no-gutter'] && p['vertical-gutter'] && (
		mapBreakpoints(p.theme.breakpoints, ({gutter}) => css`
			margin: ${stringify(parse(gutter)/-2)};
			& ${Cell} {padding: ${stringify(parse(gutter)/2)};}
		`)
	)}
`

export default Row
