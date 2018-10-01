import React from 'react'
import PropTypes from 'prop-types'

import Heart from '../../assets/icon-heart.svg'
import HeartFilled from '../../assets/icon-heart-filled.svg'

import {
  Wrapper,
  CoverLink,
  Poster,
  FavoriteButtonWrapper,
  Title,
  Subtitle,
  Content
} from './style'

export default function MovieCard({
  id,
  title,
  poster,
  year,
  favorite,
  link,
  toggleFavorite
}) {
  return (
    <Wrapper>
      {poster && <Poster poster={poster} />}
      <CoverLink to={link} aria-label={title} />
      <FavoriteButtonWrapper
        icon={favorite ? HeartFilled : Heart}
        visible={favorite || !poster}
        onClick={() => toggleFavorite(id, !favorite)}
        label={`${favorite ? 'Unfavorite' : 'Favorite'} ${title}`}
      />
      <Content>
        <Title>{title}</Title>
        <Subtitle>{year}</Subtitle>
      </Content>
    </Wrapper>
  )
}

MovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  year: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  toggleFavorite: PropTypes.func.isRequired
}

MovieCard.defaultProps = {
  poster: undefined
}
