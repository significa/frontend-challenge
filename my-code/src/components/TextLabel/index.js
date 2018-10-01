import sc from 'styled-components'
import { theme } from 'styled-tools'

import { text4 } from '../../styles/text'

const TextLabel = sc.div`
  display: block;
  padding: 4px 6px;
  height: 28px;
  box-sizing: border-box;
  border-radius: 4px;
  ${text4}
  font-weight: 500;
  line-height: 20px;
  background-color: ${theme('greyLight')};
  color: ${theme('greyDark')};
  margin-left: 8px;
`

export default TextLabel
