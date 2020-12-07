import Link from 'next/link'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

import * as S from './styles'

export type MovieCardProps = {
  id: string
  title: string
  poster: string
  year: string
  favorite?: boolean
  onFav?: () => void
}

const MovieCard = ({
  id,
  title,
  poster,
  year,
  favorite,
  onFav
}: MovieCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={poster} alt={`${title} movie poster`} />
    </S.ImageBox>
    <S.Info>
      <Link href={`/movie/${id}`} passHref>
        <a>
          <S.Title>{title}</S.Title>
          <S.Year>{year}</S.Year>
        </a>
      </Link>
      <S.FavButtton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove from Favorites" />
        ) : (
          <FavoriteBorder aria-label="Add to Favorites" />
        )}
      </S.FavButtton>
    </S.Info>
  </S.Wrapper>
)

export default MovieCard
