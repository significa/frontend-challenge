// @flow
import styled from "styled-components"
import { width } from "styled-system"

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

const Input = styled.input`
  ${width};
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  background: ${(p: ThemeType) => p.theme.color.grey.white};
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  color: ${(p: ThemeType) => p.theme.color.grey.lightgrey};
  font-family: ${(p: ThemeType) => p.theme.font.family};
  font-size: 1em;
  font-weight: regular;
  line-height: 19px;
  letter-spacing: 0.17;
  padding: 12px;
  margin-bottom: 32px;

  transition: ${(p: ThemeType) => p.theme.transition};

  &:hover {
  }

  &:focus {
    color: ${(p: ThemeType) => p.theme.color.grey.dark};
    outline: none;
  }
`

export default Input
