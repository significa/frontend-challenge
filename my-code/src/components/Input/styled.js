// @flow
import styled from "styled-components"
import { width } from "styled-system"

const Input = styled.input`
  ${width};
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  background: ${p => p.theme.color.grey.white};
  border: none;
  border-radius: 4px;
  color: ${p => p.theme.color.grey.lightgrey};
  font-family: ${p => p.theme.font.family};
  font-size: 1em;
  font-weight: regular;
  line-height: 19px;
  letter-spacing: 0.17;
  padding: 12px;
  margin-bottom: 32px;

  transition: ${p => p.theme.transition};

  &:hover {
  }

  &:focus {
    color: ${p => p.theme.color.grey.dark};
    outline: none;
  }
`

export default Input
