import Link from 'next/link'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

import useFavourite from 'hooks/favoriteMovie'

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
}: MovieCardProps) => {
  const { handlerFavourite, handlerToggle } = useFavourite(imdbID)

  return (
    <S.Wrapper>
      <S.ImageBox>
        {Poster === 'N/A' ? (
          <img
            src="/img/no-poster.jpg"
            alt="There is no specific poster for this film."
          />
        ) : (
          <img src={Poster} alt={`${Title} movie poster`} />
        )}
      </S.ImageBox>
      <S.Info>
        <Link href={`/movie/${imdbID}`} passHref>
          <a>
            <S.Title>{Title}</S.Title>
            <S.Year>{Year}</S.Year>
          </a>
        </Link>
        <S.FavButtton role="button" onClick={onFav}>
          {handlerFavourite || favorite ? (
            <Favorite
              aria-label="Remove from Favorites"
              onClick={handlerToggle}
            />
          ) : (
            <FavoriteBorder
              aria-label="Add to Favorites"
              onClick={handlerToggle}
            />
          )}
        </S.FavButtton>
      </S.Info>
    </S.Wrapper>
  )
}

export default MovieCard
