import sc from 'styled-components'
import { theme } from 'styled-tools'

import { text2, text4 } from '../../styles/text'

import illustration from '../../assets/illustration-empty-state@2x.png'

export const Center = sc.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const Illustration = sc.img.attrs({
  src: illustration,
  alt: ''
})`
  object-fit: contain;
  width: 400px;
  max-width: 100%;
  height: 200px;
`

export const Title = sc.span`
  ${text2}
  margin-top: 16px;
`

export const Subtitle = sc.span`
  ${text4}
  color: ${theme('greyLight')};
  margin-top: 8px;
`
