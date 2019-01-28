import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { useFavoriteState } from 'utils/favorites'
import AspectRatio from 'components/AspectRatio'
import Text from 'components/Text'
import { Heart, Movie } from 'components/Icon'

const Wrapper = styled.div`
	background: none;
	border: none;
	margin: 0;
	flex: 1;
	display: flex;
	position: relative;
	background: ${p => p.error ? p.theme.colors.red : p.theme.colors.grey};
	border-radius: 0.1875rem;
	cursor: pointer;
`

const fill = `position: absolute; top: 0; bottom: 0; left: 0; right: 0;`

const Anchor = styled(Link)`
	appearance: none;
	width: 100%;
	color: currentColor;
	display: block;
	border-radius: 0.1875rem;
	${fill}
	&:focus{${p => p.theme.focusShadow}}
`

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
		opacity: 0;
		${fill}
		overflow: hidden;
		border-radius: 0.1875rem;
		background: ${p => p.theme.colors.grey};
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
	z-index: 1;
	opacity: ${p => (p.isFavorite) ? 1 : 0};
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

const Info = styled.div`
	color: currentColor;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: relative;
	padding: 0.75rem;
	opacity: 0;
	cursor: pointer;
	${Wrapper}:hover &, ${Wrapper}:focus-within &{
		opacity: 1;
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

const FavoriteButton = ({movieId}) => {
	const [isFavorite, {toggle}] = useFavoriteState(movieId)
	return (
		// eslint-disable-next-line no-sequences
		<HeartWrapper isFavorite={isFavorite} onClick={toggle}>
			<StyledHeart filled={isFavorite}/>
		</HeartWrapper>
	)
}

const LoadMore = styled(Text)`
	text-align: center;
	height: 100%;
	margin: auto;
	${Wrapper}:hover & {
		color: ${p => p.theme.colors.lightGrey};
	}
`


const Card = ({movieId, title, year, image, loading, error, loadMore, ...props}) => (
	<Wrapper error={error} {...props}>
		<AspectRatio ratio={0.75}/>
		<OverflowHidden>
			{image && <Image src={`https://image.tmdb.org/t/p/w500/${image}`}/>}
		</OverflowHidden>
		{loadMore && (
			<LoadMore xs={1} weight={500} color={p => p.theme.colors.midGrey}>Load<br/>More</LoadMore>
		)}
		<AbsoluteFill>
			{!image && !loading && !loadMore && <NoImage><Movie/></NoImage>}
			{!loadMore && (
				<Overlay>
					{title && (
						<Info>
							<Text xs={1} weight={500} style={{marginBottom: '0.25em'}}>{title}</Text>
							<Text>{year}</Text>
						</Info>
					)}
					{movieId && <FavoriteButton movieId={movieId} />}
				</Overlay>
			)}
		</AbsoluteFill>
		{!(loading || error || loadMore) && <Anchor to={`/${movieId}`} tabIndex={0}/>}
	</Wrapper>
)

export default Card
