import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowBack as BackIcon } from '@styled-icons/boxicons-regular'

import Base from 'templates/Base'
import * as S from './styles'

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
  Actors
}: MovieProps) => {
  const router = useRouter()

  const actorList = Actors?.split(', ')

  return (
    <Base>
      <S.IconWrapper onClick={() => router.back()}>
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
                if (rating?.Source === 'Internet Movie Database') {
                  return (
                    <S.ImdbTag key={rating?.Source}>
                      <S.ImdbTagIcon>
                        <img src="/img/logo-imdb.svg" />
                      </S.ImdbTagIcon>
                      <S.Score>{rating?.Value}</S.Score>
                    </S.ImdbTag>
                  )
                }

                if (rating?.Source === 'Rotten Tomatoes') {
                  return (
                    <S.RottenTag key={rating?.Source}>
                      <S.RottenTagIcon>
                        <img src="/img/logo-rotten-tomatoes.svg" />
                      </S.RottenTagIcon>
                      <S.Score>{rating?.Value}</S.Score>
                    </S.RottenTag>
                  )
                }
              })}
            <div /* className={styles.LikeTag} */>
              <button
              /*  onClick={handlerToggle}
                className={
                  handlerFavourite ? styles.ActiveLikeButtom : styles.LikeButton
                } */
              >
                <img
                  /*  src={handlerFavourite ? iconHeartFull : iconHeartOutline} */
                  width="16"
                />
                {/*   {handlerFavourite ? 'Added' : 'Add to favourites'} */}
              </button>
            </div>
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
          </S.MoreAbout>
        </S.MovieContent>
      </S.Wrapper>
    </Base>
  )
}

export default Movie
