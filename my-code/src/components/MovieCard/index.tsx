import Link from 'next/link'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

import * as S from './styles'

export type MovieCardProps = {
  imdbID: string
  Title: string
  Poster: string
  Year: string
  favorite?: boolean
  onFav?: () => void
}

const MovieCard = ({
  imdbID,
  Title,
  Poster,
  Year,
  favorite,
  onFav
}: MovieCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={Poster} alt={`${Title} movie poster`} />
    </S.ImageBox>
    <S.Info>
      <Link href={`/movie/${imdbID}`} passHref>
        <a>
          <S.Title>{Title}</S.Title>
          <S.Year>{Year}</S.Year>
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
