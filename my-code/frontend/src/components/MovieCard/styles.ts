import styled from "styled-components";
import { prop, theme } from "styled-tools";

export const Overlay = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${theme("borderVariant")};
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
  padding: 8px;
  .movie-info {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    span.title {
      font-size: 20px;
    }
  }
`;

interface IContainerProps {
  background: string;
}

export const Container = styled.div<IContainerProps>`
  position: relative;
  margin-right: auto;
  background-image: url(${prop("background")});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 250px;
  border-radius: 5px;
  overflow: hidden;
  &:hover {
    ${Overlay} {
      visibility: visible;
      opacity: 0.85;
    }
  }
`;
