// @flow
import styled, { css } from "styled-components"
import { space } from "styled-system"

const base = css`
  ${space};
  font-family: ${p => p.theme.font.family};
  color: ${p =>
    (p.grey && p.theme.color.grey.lightgrey) ||
    (p && p.theme.color.grey.white)};
`

const Text100 = styled.p`
  ${base};
  font-size: ${p => p.theme.font.smaller};
  line-height: 24px;
`

const Text200 = styled.p`
  ${base};
  font-size: ${p => p.theme.font.small};
  line-height: 24px;
`

const Text300 = styled.p`
  ${base};
  font-size: ${p => p.theme.font.large};
  font-weight: bold;
`

const Text400 = styled.p`
  ${base};
  font-size: ${p => p.theme.font.display};
  font-weight: bold;
`

export { Text100, Text200, Text300, Text400 }
