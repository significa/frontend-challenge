import styled from "styled-components"
import { width } from "styled-system"

const Input = styled.input`
  ${width};

  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  background: ${({ theme: { color } }) => color.grey.white};
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  color: ${({ theme: { color } }) => color.grey.lightgrey};
  font-family: ${({ theme: { font } }) => font.family};
  font-size: 1em;
  font-weight: regular;
  line-height: 19px;
  letter-spacing: 0.17;
  padding: 12px;
  margin-bottom: 32px;

  transition: ${({ theme }) => theme.transition};

  &:focus {
    color: ${({ theme: { color } }) => color.grey.dark};
    outline: none;
  }
`

export default Input
