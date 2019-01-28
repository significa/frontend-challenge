import React from 'react'
import styled from 'styled-components'
import above from 'utils/above'
import Text from 'components/Text'

const getRating = (release_dates = {}) => (
	release_dates?.results?.find(x => x.iso_3166_1 === 'US')?.release_dates[0]?.certification || null
)

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`

const Rating = styled(Text)`
	background: ${p => p.theme.colors.lightGrey};
	color: ${p => p.theme.colors.dark};
	font-weight: 500;
	border-radius: 0.25rem;
	margin: 0 0.5rem;
	padding: 0.125rem 0.375rem;
	text-align: center;
	${above('md')`
		margin: -0.25rem 0.5rem;
		padding: 0.375rem 0.5rem;
	`}
	${above('xg')`
		margin: -0.125rem 0.5rem;
		padding: 0.5rem 0.675rem;
	`}
`

const Meta = ({runtime, release_date, release_dates}) => (
	<Wrapper style={{margin: '1.5rem 0'}}>
		<Text sm={1} color={p => p.theme.colors.lightGrey || ''}>
			{runtime && `${runtime} min • `}
			{release_date && `${release_date.split('-')[0]} • `}
		</Text>
		{getRating(release_dates) && <Rating>{getRating(release_dates)}</Rating>}
	</Wrapper>
)

export default Meta
