// @flow
import styled, { css } from "styled-components"
import { space } from "styled-system"
import type { PropType } from "../../types.js"

const base = css`
  ${space};
  font-family: ${({ theme }: PropType) => theme.font.family};
  color: ${(p: PropType) =>
    (p.grey && p.theme.color.grey.lightgrey) ||
    (p && p.theme.color.grey.white)};
`

const Text100 = styled.p`
  ${base};
  font-size: ${({ theme }: PropType) => theme.font.smaller};
  line-height: 24px;
`

const Text200 = styled.p`
  ${base};
  font-size: ${({ theme }: PropType) => theme.font.small};
  font-weight: bold;
  line-height: 24px;
`

const Text300 = styled.p`
  ${base};
  font-size: ${({ theme }: PropType) => theme.font.large};
  font-weight: bold;
`

const Text400 = styled.p`
  ${base};
  font-size: ${({ theme }: PropType) => theme.font.display};
  font-weight: bold;
`

export { Text100, Text200, Text300, Text400 }
