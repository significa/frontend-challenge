import styled, { css } from "styled-components";

import colors from "../Provider/colors";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: [full-start] 130px [content-start] auto [content-end] 130px [full-end];
`;

export const Main = styled.div`
  grid-column-start: content-start;
  grid-column-end: content-end;
`;

export const Header = styled.div`
  margin: 24px 0;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "100%")};

  ${props =>
    props.justifyLeft &&
    css`
      justify-content: flex-start;
    `} ${props =>
    props.justifyRight &&
    css`
      justify-content: flex-end;
    `};
`;

export const ImageHolder = styled(Container)`
  border-radius: 5px;
  background-color: ${colors.greyscale.grey.dark};
  background-image: url(${props => (props.bg ? props.bg : "none")});
  background-size: cover;
`;
