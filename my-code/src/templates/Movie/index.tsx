import Link from 'next/link'
import { ArrowBack as BackIcon } from '@styled-icons/boxicons-regular'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

import useFavourite from 'hooks/favoriteMovie'

import Base from 'templates/Base'
import * as S from './styles'
import Button from 'components/Button'

type MovieRating = {
  Source: string
  Value: string
}

export type MovieProps = {
  Title: string
  Year: string
  Actors: string
  Rated: string
  Runtime: string
  Genre: string
  Director: string
  Plot: string
  Ratings: MovieRating[]
  Poster: string
  imdbID: string
  Type: string
}

const Movie = ({
  Runtime,
  Year,
  Rated,
  Title,
  Ratings,
  Plot,
  Actors,
  Genre,
  Director,
  Poster,
  imdbID
}: MovieProps) => {
  const { handlerFavourite, handlerToggle } = useFavourite(imdbID)

  const actorList = Actors?.split(', ')
  const genreList = Genre?.split(', ')
  const directorList = Director?.split(', ')

  return (
    <Base>
      <S.IconWrapper>
        <Link href="/">
          <a aria-label="back">
            <BackIcon />
          </a>
        </Link>
      </S.IconWrapper>

      <S.Wrapper>
        <S.MovieContent>
          <S.Details>
            <S.RunTime>{`${Runtime} · ${Year} · `}</S.RunTime>
            <S.RatedTag>{Rated}</S.RatedTag>
          </S.Details>
          <S.Title>{Title}</S.Title>
          <S.RatedContent>
            {Ratings.length &&
              Ratings.map((rating) => {
                if (rating.Source === 'Internet Movie Database') {
                  return (
                    <S.ImdbTag key={rating?.Source}>
                      <S.ImdbTagIcon>
                        <img src="/img/logo-imdb.svg" aria-label="IMDB Logo" />
                      </S.ImdbTagIcon>
                      <S.Score>{rating?.Value}</S.Score>
                    </S.ImdbTag>
                  )
                }

                if (rating.Source === 'Rotten Tomatoes') {
                  return (
                    <S.RottenTag key={rating?.Source}>
                      <S.RottenTagIcon>
                        <img
                          src="/img/logo-rotten-tomatoes.svg"
                          aria-label="Rotten Tomatoes Logo"
                        />
                      </S.RottenTagIcon>
                      <S.Score>{rating?.Value}</S.Score>
                    </S.RottenTag>
                  )
                }
              })}
            <S.LikeTag onClick={handlerToggle} aria-label="likes">
              {handlerFavourite ? (
                <Button icon={<Favorite />} favourite aria-label="Added Button">
                  Added
                </Button>
              ) : (
                <Button
                  icon={<FavoriteBorder />}
                  favourite={false}
                  aria-label="Add to favourites Button"
                >
                  Add to favourites
                </Button>
              )}
            </S.LikeTag>
          </S.RatedContent>

          <S.Storyline>
            <S.SmallTitle>Plot</S.SmallTitle>
            <S.StorylineText>{Plot}</S.StorylineText>
          </S.Storyline>

          <S.MoreAbout>
            <S.ListContent>
              <S.SmallTitle>Cast</S.SmallTitle>
              <S.List>
                {actorList.map((actor) => {
                  return <li key={actor}>{actor.trim()}</li>
                })}
              </S.List>
            </S.ListContent>

            <S.ListContent>
              <S.SmallTitle>Gender</S.SmallTitle>
              <S.List>
                {genreList.map((genre) => {
                  return <li key={genre}>{genre.trim()}</li>
                })}
              </S.List>
            </S.ListContent>

            <S.ListContent>
              <S.SmallTitle>Director</S.SmallTitle>
              <S.List>
                {directorList.map((director) => {
                  return <li key={director}>{director.trim()}</li>
                })}
              </S.List>
            </S.ListContent>
          </S.MoreAbout>
        </S.MovieContent>
        <S.PosterContent>
          {Poster === 'N/A' ? (
            <img
              src="/img/no-poster.jpg"
              alt="There is no specific poster for this film."
            />
          ) : (
            <img src={Poster} alt={`${Title} movie poster`} />
          )}
        </S.PosterContent>
      </S.Wrapper>
    </Base>
  )
}

export default Movie
