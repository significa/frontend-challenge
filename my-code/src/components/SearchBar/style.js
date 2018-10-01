import sc from 'styled-components'
import { theme } from 'styled-tools'
import placeholder from 'polished/lib/mixins/placeholder'

import { text4 } from '../../styles/text'
import Magnifier from '../../assets/icon-magnifier.svg'

export const Wrapper = sc.div`
  margin: 24px 0;
  padding-left: 12px;
  border-radius: 4px;
  color: ${theme('greyDark')};
  background: ${theme('greyWhite')};
  display: flex;
  align-items: center;
`

export const Icon = sc(Magnifier)`
  color: ${theme('greyLight')};
`

export const Input = sc.input`
  background: none;
  border: none;
  margin: 0;
  font: inherit;
  ${text4}
  color: ${theme('greyDark')};
  display: block;
  padding: 12px;
  height: 44px;
  flex: 1;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    outline: none;
  }

  ${placeholder({ color: theme('greyLight') })}
`
