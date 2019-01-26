import styled from 'styled-components'
import { mapPropsBreakpoints } from 'utils/breakpoints'

const Text = styled.div`
	color: ${p => p.color || 'currentColor'};
	${p => mapPropsBreakpoints(p.theme.breakpoints, x => p.theme.typography[x])}
`

export default Text
