// @flow
import styled from "styled-components"
import { width } from "styled-system"
import type { PropType } from "../../../types.js"

const Input = styled.input`
  ${width};

  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  background: ${({ theme: { color } }: PropType) => color.grey.white};
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  color: ${({ theme: { color } }: PropType) => color.grey.lightgrey};
  font-family: ${({ theme: { font } }: PropType) => font.family};
  font-size: 1em;
  font-weight: regular;
  line-height: 19px;
  letter-spacing: 0.17;
  padding: 12px;
  margin-bottom: 32px;

  transition: ${({ theme }: PropType) => theme.transition};

  &:focus {
    color: ${({ theme: { color } }: PropType) => color.grey.dark};
    outline: none;
  }
`

export default Input
