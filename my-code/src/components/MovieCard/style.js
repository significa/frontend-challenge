import sc from 'styled-components'
import { Link } from 'react-router-dom'
import { theme } from 'styled-tools'

import { text3, text4 } from '../../styles/text'
import IconButton from '../IconButton'

export const Wrapper = sc.div`
  width: 100%;
  text-decoration: none;
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  color: ${theme('greyWhite')};

  &:focus {
    outline: none;
  }

  /* Aspect ratio */
  &:before {
    content: '';
    display: block;
    padding-top: 133.3333333%;
  }
`

export const CoverLink = sc(Link)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const Poster = sc.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${theme('greyMain')};
  background-image: ${({ poster }) => `url(${poster})`};
`

export const FavoriteButtonWrapper = sc(IconButton)`
  height: auto;
  position: absolute;
  z-index: 1;
  top: 12px;
  right: 12px;
  color: ${theme('greyWhite')};
  will-change: opacity;
  transition:
    opacity
    ${theme('transitionTiming')}
    ${theme('transitionDuration')}
  ;
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, .2));
  opacity: ${({ visible = true }) => (visible ? 1 : 0)};

  ${Poster} ~ ${CoverLink}:hover ~ &,
  ${Poster} ~ ${CoverLink}:focus ~ &,
  ${Poster} ~ &:hover,
  ${Poster} ~ &:focus {
    opacity: 1;
  }
`

export const Title = sc.span`
  ${text3}
`

export const Subtitle = sc.span`
  ${text4}
`

export const Content = sc.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: ${theme('scrimColor')};
  will-change: opacity;
  transition:
    opacity
    ${theme('transitionTiming')}
    ${theme('transitionDuration')}
  ;

  ${Poster} ~ & {
    opacity: 0;
  }

  ${Poster} ~ ${CoverLink}:hover ~ &,
  ${Poster} ~ ${CoverLink}:focus ~ &,
  ${Poster} ~ ${FavoriteButtonWrapper}:hover ~ &,
  ${Poster} ~ ${FavoriteButtonWrapper}:focus ~ & {
    opacity: 1;
  }
`
