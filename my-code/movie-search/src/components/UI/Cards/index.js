import styled from "styled-components";

import colors from "../Provider/colors";

export const Card = styled.div`
  background-color: ${colors.greyscale.grey.dark};
  background-image: url(${props => (props.bg ? props.bg : "none")});
  background-size: cover;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  margin: 15px;
  width: 200px;
  height: 300px;
  overflow: hidden;
  position: relative;

  & > a {
    width: 100%;
    height: 100%;
  }
`;

export const CardOverlay = styled.div`
  display: flex;
  color: ${colors.greyscale.white};
  background-color: ${colors.alpha.grey};
  height: 100%;
  padding: 12px;
  position: absolute;
  opacity: 0;
  text-align: left;
  transition: opacity 150ms ease-in-out;
  width: 100%;

  &:hover {
    opacity: 1;
  }
`;

export const CardInfo = styled.div`
  align-self: flex-end;
  margin: 0;
`;
