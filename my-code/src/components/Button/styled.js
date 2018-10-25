// @flow
import styled from "styled-components"

type ThemeType = {
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

type PropType = {
  theme: ThemeType,
  active: boolean
}

const RegularButton = styled.button`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  background: none;
  background-color: ${(p: PropType) =>
    p.active ? p.theme.color.main.red : ""};
  border: 1px solid ${({ theme }: PropType) => theme.color.grey.grey};
  border-radius: 4px;
  color: ${(p: PropType) => (p.active ? "white" : p.theme.color.grey.grey)};

  letter-spacing: 0.17;
  font-family: ${(p: ThemeType) => p.theme.font.family};
  font-size: ${(p: ThemeType) => p.theme.font.smaller};
  font-weight: bold;
  line-height: 24px;
  padding: 12px;
  outline: none;

  transition: ${({ theme }: PropType) => theme.transition};

  &:hover {
    border: 1px solid ${({ theme }: PropType) => theme.color.main.red};
    color: ${(p: ThemeType) => p.theme.color.grey.white};
    outline: none;
  }

  &:active {
    background-color: ${({ theme }: PropType) => theme.color.main.red};
    outline: none;
  }
`
export default RegularButton
