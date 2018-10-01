import sc, { css } from 'styled-components'
import { theme } from 'styled-tools'

import { text4 } from '../../styles/text'

export const Wrapper = sc.button`
  display: flex;
  align-items: center;
  /* Account for border */
  padding: 0 15px 0 11px;
  height: 40px;
  outline: none;
  background: none;
  color: ${theme('greyLight')};
  border: 1px solid ${theme('greyMid')};
  border-radius: 4px;
  cursor: pointer;
  transition-timing-function: ${theme('transitionTiming')};
  transition-duration: ${theme('transitionDuration')};
  transition-property: color, border-color, background-color;
  font-family: inherit;
  ${text4}
  font-weight: 500;

  &:focus,
  &:hover {
    border-color: ${theme('mainRed')};
    color: ${theme('greyWhite')};
  }

  ${({ active }) =>
    active &&
    css`
      border-color: ${theme('mainRed')};
      background-color: ${theme('mainRed')};
      color: ${theme('greyWhite')};
    `}
`

export const IconWrapper = sc.div`
  width: 16px;
  height: 16px;
  margin-right: 12px;
  display: flex;
  align-items: center;
`
