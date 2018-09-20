import styled, { css } from "styled-components";

import { applyColor } from "../Provider/utils";

//  Text
export const Text = styled.p.attrs({
  color: props => (props.color ? props.color : "white")
})`
  color: ${applyColor};
  font-size: 16px;
  letter-spacing: .16px;
  line-height: 24px;
  margin: 0;
  padding: 0;
  text-align: left;  
  transition: color 100ms ease-in-out;

  /* Centered */

  ${props =>
    props.center &&
    css`
      text-align: center;
    `}

  /* Bold */
  ${props =>
    props.bold &&
    css`
      font-weight: 700;
    `}
`;

export const Heading = styled.h1`
  color: ${applyColor};
  font-size: 80px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 88px;
`;

export const CardTitle = styled.h3`
  color: ${applyColor};
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.2px;
  line-height: 30px;
`;

export const Headline = styled.h4`
  color: ${applyColor};
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.16px;
  line-height: 24px;
  width: 100%;
  margin: 30px 0 10px;
`;
