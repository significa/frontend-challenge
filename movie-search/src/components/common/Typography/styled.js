import styled, { css } from "styled-components"
import { space } from "styled-system"

const base = css`
  ${space};
  font-family: ${({ theme }) => theme.font.family};
  color: ${p =>
    (p.grey && p.theme.color.grey.lightgrey) ||
    (p && p.theme.color.grey.white)};
`

const TextLink = styled.a`
  color: ${({ theme }) => theme.color.grey.white};
  font-size: ${({ theme }) => theme.font.smaller};
  line-height: 24px;
  text-decoration: none;

  &:link {
    color: ${({ theme }) => theme.color.grey.white};
    text-decoration: none;
  }

  &:visited {
    color: ${({ theme }) => theme.color.grey.white};
    text-decoration: none;
  }

  &:hover {
    color: ${({ theme }) => theme.color.grey.midgrey};
    text-decoration: none;
  }

  &:active {
    color: ${({ theme }) => theme.color.grey.midgrey};
    text-decoration: none;
  }
`

const Text100 = styled.p`
  ${base};
  font-size: ${({ theme }) => theme.font.smaller};
  line-height: 24px;
`

const Text200 = styled.p`
  ${base};
  font-size: ${({ theme }) => theme.font.small};
  font-weight: bold;
  line-height: 24px;
`

const Text300 = styled.p`
  ${base};
  font-size: ${({ theme }) => theme.font.large};
  font-weight: bold;
`

const Text400 = styled.p`
  ${base};
  font-size: ${({ theme }) => theme.font.display};
  font-weight: bold;
`

export { Text100, Text200, Text300, Text400, TextLink }
