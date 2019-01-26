import React from 'react'
import styled from 'styled-components'
import AspectRatio from 'components/AspectRatio'
import Text from 'components/Text'
import Heart from 'components/Heart'
import {useFavoriteState} from 'utils/favorites'

const Wrapper = styled.div`
	flex: 1;
	display: flex;
	position: relative;
	border-radius: 0.1875rem;
	background: ${p => p.theme.colors.grey};
	border-radius: 0.1875rem;
	overflow: hidden;
`

const Image = styled.img`
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	object-fit: cover;
`

const Overlay = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column-reverse;
	justify-content: space-between;
	position: relative;
	&:before{
		content: '';
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: ${p => p.theme.colors.grey};
		box-shadow: 0 0.25rem 2rem 0 rgba(5,10,13,0.30);
		${Wrapper}:hover &, ${Wrapper}:focus-within &{
			opacity: 0.9;
		}
	}
`

const HeartWrapper = styled.button`
	background: none;
	border: none;
	margin: 0;
	color: currentColor;
	position: relative;
	margin-left: auto;
	padding: 0.75rem;
	cursor: pointer;
	opacity: ${p => p.isFavorite ? 1 : 0};
	${Wrapper}:hover &, ${Wrapper}:focus-within &{
		opacity: 1;
	}
`

const Info = styled.button`
	background: none;
	border: none;
	margin: 0;
	color: currentColor;
	position: relative;
	padding: 0.75rem;
	opacity: 0;
	cursor: pointer;
	${Wrapper}:hover &, ${Wrapper}:focus-within &{
		opacity: 1;
	}
`

const Card = ({id, title, year, image}) => {
	const [isFavorite, {toggle}] = useFavoriteState(id)
	return (
		<AspectRatio ratio={0.75}>
			<Wrapper>
				<Image src={`https://image.tmdb.org/t/p/w500/${image}`}/>
				<Overlay>
					<Info>
						<Text xs={1} weight={500} style={{marginBottom: '0.25em'}}>{title}</Text>
						<Text>{year}</Text>
					</Info>
					<HeartWrapper isFavorite={isFavorite} onClick={toggle}>
						<Heart filled={isFavorite}/>
					</HeartWrapper>
				</Overlay>
			</Wrapper>
		</AspectRatio>
	)
}


export default Card
