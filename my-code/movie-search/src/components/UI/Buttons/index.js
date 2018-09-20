import styled, { css } from "styled-components";

import colors from "../Provider/colors";
import Heart from "../Icons/Heart";

export const Button = styled.button`
  align-items: center;
  align-self: center;
  background-color: transparent;
  border: 1px solid ${colors.greyscale.grey.default};
  border-radius: 5px;
  color: ${colors.greyscale.grey.default};
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0.16px;
  padding: 12px 16px 12px 12px;
  position: relative;
  transition: color 100ms ease-in-out, border 100ms ease-in-out;

  &:hover,
  &:active {
    border-color: ${colors.red};
  }

  &:focus {
    outline: none;
  }

  &:hover .iconHeart-Outline {
    stroke: ${colors.greyscale.white};
  }

  &:hover > p {
    color: ${colors.greyscale.white};
  }

  ${props =>
    props.isActive &&
    css`
      background-color: ${colors.red};
      color: ${colors.greyscale.white};
      border: none;
    `};
`;

export const Icon = styled(Heart)`
  margin-right: 12px;

  & .iconHeart-Outline {
    transition: stroke 100ms ease-in-out;
  }
`;
