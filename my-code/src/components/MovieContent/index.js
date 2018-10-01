import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'
import IconButton from '../IconButton'
import IconLabel from '../IconLabel'
import TextLabel from '../TextLabel'

import Arrow from '../../assets/icon-arrow.svg'
import Heart from '../../assets/icon-heart.svg'
import HeartFilled from '../../assets/icon-heart-filled.svg'
import IMDB from '../../assets/logo-imdb.svg'
import Rotten from '../../assets/logo-rotten-tomatoes.svg'

import {
  Wrapper,
  Row,
  MetaText,
  Title,
  Text,
  Heading,
  PosterWrapper,
  Poster,
  Paragraph,
  Subgrid
} from './style'

export default function MovieContent({
  id,
  runtime,
  year,
  rated,
  title,
  imdbRating,
  rottenRating,
  favorite,
  plot,
  actors,
  genres,
  directors,
  poster,
  goBack,
  toggleFavorite
}) {
  return (
    <Wrapper>
      <Row>
        <IconButton icon={Arrow} onClick={goBack} />
      </Row>

      <Row>
        <MetaText>
          {runtime} · {year} ·
        </MetaText>
        <TextLabel>{rated}</TextLabel>
      </Row>

      <Row>
        <Title>{title}</Title>
      </Row>

      <Row>
        <IconLabel color="#ff9f1c" icon={IMDB}>
          {imdbRating}
          /10
        </IconLabel>
        {rottenRating && (
          <IconLabel color="#ff4040" icon={Rotten}>
            {rottenRating}
          </IconLabel>
        )}
        <Button
          icon={favorite ? HeartFilled : Heart}
          onClick={() => toggleFavorite(id, !favorite)}
          active={favorite}
        >
          {favorite ? 'Added' : 'Add to favourites'}
        </Button>
      </Row>

      <Row direction="column">
        <Heading>Plot</Heading>
        <Paragraph>
          <Text>{plot}</Text>
        </Paragraph>
      </Row>

      <Subgrid>
        <div>
          <Heading>Cast</Heading>
          <Text>
            {actors.map(actor => (
              <div key={actor}>{actor}</div>
            ))}
          </Text>
        </div>
        <div>
          <Heading>Genre</Heading>
          <Text>
            {genres.map(genre => (
              <div key={genre}>{genre}</div>
            ))}
          </Text>
        </div>
        <div>
          <Heading>Director</Heading>
          <Text>
            {directors.map(director => (
              <div key={director}>{director}</div>
            ))}
          </Text>
        </div>
      </Subgrid>

      <PosterWrapper>{poster && <Poster src={poster} />}</PosterWrapper>
    </Wrapper>
  )
}

MovieContent.propTypes = {
  id: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  rated: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imdbRating: PropTypes.string.isRequired,
  rottenRating: PropTypes.string,
  favorite: PropTypes.bool.isRequired,
  plot: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  directors: PropTypes.arrayOf(PropTypes.string).isRequired,
  poster: PropTypes.string,
  goBack: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired
}

MovieContent.defaultProps = {
  rottenRating: undefined,
  poster: undefined
}
