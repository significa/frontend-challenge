import sc from 'styled-components'
import { theme } from 'styled-tools'

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = sc.button`
  height: 40px;
  outline: none;
  border: none;
  padding: 0;
  background: none;
  color: ${theme('greyLight')};
  cursor: pointer;
  transition:
    color
    ${theme('transitionTiming')}
    ${theme('transitionDuration')}
  ;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus,
  &:hover {
    color: ${theme('greyWhite')};
  }
`
