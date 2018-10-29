// @flow
import styled from "styled-components"
import type { PropType } from "../../../types.js"

const HeartButton = styled.button`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  background: none;
  background-color: ${(p: PropType) =>
    p.active ? p.theme.color.main.red : "none"};
  border: 1px solid ${({ theme: { color } }: PropType) => color.grey.grey};
  border-radius: 4px;
  color: ${(p: PropType) => (p.active ? "white" : p.theme.color.grey.grey)};

  letter-spacing: 0.17;
  font-family: ${({ theme: { font } }: PropType) => font.family};
  font-size: ${({ theme: { font } }: PropType) => font.smaller};
  font-weight: bold;
  line-height: 24px;
  transition: ${({ theme }: PropType) => theme.transition};
  padding: 12px;
  outline: none;

  &:hover {
    border: 1px solid ${({ theme: { color } }: PropType) => color.main.red};
    color: ${({ theme: { color } }: PropType) => color.grey.white};
    outline: none;
  }

  &:active {
    background-color: ${({ theme: { color } }: PropType) => color.main.red};
    outline: none;
  }
`
export default HeartButton
