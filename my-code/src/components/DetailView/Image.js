import React from 'react'
import styled from 'styled-components'
import { Movie } from 'components/Icon'
import AspectRatio from 'components/AspectRatio'

const fill = `position: absolute; top: 0; bottom: 0; left: 0; right: 0;`

const Wrapper = styled(AspectRatio)`
	overflow: hidden;
	object-fit: cover;
	border-radius: 0.25rem;
	background-color: ${p => p.theme.colors.grey};
	img{
		display: block;
	}
`

const NoImage = styled.div`
	${fill}
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	color: ${p => p.theme.colors.midGrey};
`

const Image = ({alt, image}) => (
	<Wrapper ratio={image ? 0.75 : 1}>
		{image
			? <img alt={alt} src={`https://image.tmdb.org/t/p/w500/${image}`}/>
			: <NoImage><Movie size={96} strokeWidth={1.125}/></NoImage>
		}
	</Wrapper>
)

export default Image
