// @flow
import styled, { css } from "styled-components"
import { space } from "styled-system"

type ThemeType = {
  theme: {
    color: {
      main: {
        yellow: string,
        red: string,
        green: string
      },
      grey: {
        dark: string,
        grey: string,
        midgrey: string,
        lightgrey: string,
        white: string
      }
    },
    font: {
      family: string,
      base: string,
      family: string,
      smaller: string,
      small: string,
      large: string,
      display: string
    },
    space: Array<string>,
    transition: string
  }
}

const base = css`
  ${space};
  font-family: ${(p: ThemeType) => p.theme.font.family};
  color: ${(p: ThemeType) =>
    (p.grey && p.theme.color.grey.lightgrey) ||
    (p && p.theme.color.grey.white)};
`

const Text100 = styled.p`
  ${base};
  font-size: ${(p: ThemeType) => p.theme.font.smaller};
  line-height: 24px;
`

const Text200 = styled.p`
  ${base};
  font-size: ${(p: ThemeType) => p.theme.font.small};
  font-weight: bold;
  line-height: 24px;
`

const Text300 = styled.p`
  ${base};
  font-size: ${(p: ThemeType) => p.theme.font.large};
  font-weight: bold;
`

const Text400 = styled.p`
  ${base};
  font-size: ${(p: ThemeType) => p.theme.font.display};
  font-weight: bold;
`

export { Text100, Text200, Text300, Text400 }
