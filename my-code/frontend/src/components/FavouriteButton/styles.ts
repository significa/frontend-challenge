import styled, { css } from "styled-components";
import { ifProp, prop, theme } from "styled-tools";

interface IButtonProps {
  liked: boolean;
}
export const Container = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid ${theme("borderVariant")};
  background: transparent;
  color: ${theme("fontColor")};
  ${ifProp(
    "liked",
    css`
      background: ${theme("red")};
    `
  )}
`;
