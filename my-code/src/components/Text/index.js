import styled from 'styled-components'
import { mapPropsBreakpoints } from 'utils/breakpoints'

const Text = styled.div`
	color: ${p => p.color || 'currentColor'};
	font-weight: ${p => p.weight};
	${p => mapPropsBreakpoints(p.theme.breakpoints, x => p.theme.typography[x])}
`

Text.defaultProps = {xs: 0}

export default Text
