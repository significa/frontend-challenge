import React from 'react'
import styled from 'styled-components'
import { useUrlState } from 'with-url-state'
import AspectRatio from 'components/AspectRatio'
import Text from 'components/Text'
import { Heart, Movie } from 'components/Icon'
import { useFavoriteState } from 'utils/favorites'

const Wrapper = styled.div`
	flex: 1;
	display: flex;
	position: relative;
	background: ${p => p.theme.colors.grey};
	border-radius: 0.1875rem;
`

const fill = `position: absolute; top: 0; bottom: 0; left: 0; right: 0;`

const AbsoluteFill = styled.div`${fill}`

const OverflowHidden = styled(AbsoluteFill)`
	overflow: hidden;
	border-radius: 0.1875rem;
`

const Image = styled.img`
	display: block;
	object-fit: cover;
`

const Overlay = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column-reverse;
	justify-content: space-between;
	position: relative;
	&:before{
		content: '';
		opacity: ${p => p.isActive ? 0.9 : 0};
		${fill}
		overflow: hidden;
		border-radius: 0.1875rem;
		background: ${p => p.isActive ? p.theme.colors.yellow : p.theme.colors.grey};
		box-shadow: 0 0.25rem 2rem 0 rgba(5,10,13,0.30);
		transition: 0.2s all;
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
	opacity: ${p => (p.isFavorite || p.isActive) ? 1 : 0};
	${Wrapper}:hover &, ${Wrapper}:focus-within &{
		opacity: 1;
	}
`

const StyledHeart = styled(Heart)`
	transition: 0.2s all;
	${HeartWrapper}:focus &, ${HeartWrapper}:hover & {
		color: ${p => p.theme.colors.red};
	}
`

const Info = styled.button`
	background: none;
	border: none;
	margin: 0;
	color: currentColor;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: relative;
	padding: 0.75rem;
	opacity: ${p => p.isActive ? 1 : 0};
	cursor: pointer;
	${Wrapper}:hover &, ${Wrapper}:focus-within &{
		opacity: 1;
	}
	&:focus{${p => !p.isActive && p.theme.focusShadow}}
`

const NoImage = styled.div`
	${fill}
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	color: ${p => p.theme.colors.midGrey};
`


const Card = ({id, title, year, image, loading, ...props}) => {
	const [isFavorite, {toggle}] = useFavoriteState(id)
	const [urlState, setUrlState] = useUrlState()
	const isActive = ''+id === ''+urlState.id

	return (
		<Wrapper isActive={isActive} {...props}>
			<AspectRatio ratio={0.75}/>
			<OverflowHidden>
				{image && <Image src={`https://image.tmdb.org/t/p/w500/${image}`}/>}
			</OverflowHidden>
			<AbsoluteFill>
				{!image && !loading && <NoImage><Movie/></NoImage>}
				<Overlay isActive={isActive}>
					{title && (
						<Info isActive={isActive} onClick={() => setUrlState({id})}>
							<Text xs={1} weight={500} style={{marginBottom: '0.25em'}}>{title}</Text>
							<Text>{year}</Text>
						</Info>
					)}
					{id && (
						<HeartWrapper isActive={isActive} isFavorite={isFavorite} onClick={toggle}>
							<StyledHeart filled={isFavorite}/>
						</HeartWrapper>
					)}
				</Overlay>
			</AbsoluteFill>
		</Wrapper>
	)
}


export default Card
