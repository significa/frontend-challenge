import styled from "styled-components"

const HeartButton = styled.button`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  background: none;
  background-color: ${p => (p.active ? p.theme.color.main.red : "none")};
  border: 1px solid ${({ theme: { color } }) => color.grey.grey};
  border-radius: 4px;
  color: ${p => (p.active ? "white" : p.theme.color.grey.grey)};

  letter-spacing: 0.17;
  font-family: ${({ theme: { font } }) => font.family};
  font-size: ${({ theme: { font } }) => font.smaller};
  font-weight: bold;
  line-height: 24px;
  transition: ${({ theme }) => theme.transition};
  padding: 12px;
  outline: none;

  &:hover {
    border: 1px solid ${({ theme: { color } }) => color.main.red};
    color: ${({ theme: { color } }) => color.grey.white};
    outline: none;
  }

  &:active {
    background-color: ${({ theme: { color } }) => color.main.red};
    outline: none;
  }
`
export default HeartButton
