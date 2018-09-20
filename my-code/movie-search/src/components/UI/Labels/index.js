import styled, { css } from "styled-components";

import colors from "../Provider/colors";

export const Label = styled.span`
  background-color: ${colors.greyscale.grey.light};
  padding: 4px 6px;
  border-radius: 5px;
  color: ${colors.greyscale.black};
  font-size: 16px;
`;

export const LabelRating = styled.div`
  display: flex;
  margin-right: 16px;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 8px;
  border: 1px solid ${colors.greyscale.grey.default};
  border-left: none;
  border-radius: 0 5px 5px 0;
`;

export const RatingIcon = styled(Rating)`
  border: none;
  background-color: ${colors.greyscale.grey.default};
  border-radius: 5px 0 0 5px;

  ${props =>
    props.src === "internetMovieDatabase" &&
    css`
      background-color: ${colors.yellow};
    `} ${props =>
    props.src === "rottenTomatoes" &&
    css`
      background-color: ${colors.red};
    `};
`;
