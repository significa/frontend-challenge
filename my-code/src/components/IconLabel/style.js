import sc from 'styled-components'
import { theme, prop } from 'styled-tools'

import { text4 } from '../../styles/text'

export const Wrapper = sc.div`
  display: flex;
  align-items: stretch;
  height: 40px;
  margin-right: 16px;
  margin-bottom: 8px;
`

export const IconWrapper = sc.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${prop('color')};
  border-radius: 4px 0 0 4px;
  padding: 8px;
  min-width: 40px;
  box-sizing: border-box;
`

export const TextWrapper = sc.div`
  border: 1px solid ${theme('greyMid')};
  border-left: none;
  /* Account for border */
  padding: 8px 7px 8px 8px;
  border-radius: 0 4px 4px 0;
  ${text4}
  font-weight: 500;
`
