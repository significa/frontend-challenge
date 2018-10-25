// @flow
import styled from "styled-components"

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

const RegularButton = styled.button`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  background: none;
  border: 1px solid ${(p: ThemeType) => p.theme.color.grey.grey};
  border-radius: 4px;
  color: ${(p: ThemeType) => p.theme.color.grey.lightgrey};
  letter-spacing: 0.17;
  padding: 12px;
  outline: none;

  transition: ${(p: ThemeType) => p.theme.transition};

  &:hover {
    border: 1px solid ${(p: ThemeType) => p.theme.color.main.red};
    color: ${(p: ThemeType) => p.theme.color.grey.white};
    outline: none;
  }

  &:active {
    background-color: ${(p: ThemeType) => p.theme.color.main.red};
    outline: none;
  }
`
export default RegularButton
