import styled from "styled-components";
import { prop, theme } from "styled-tools";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;

export const MovieInfoContainer = styled.div`
  flex: 1.35;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      position: relative;
      font-size: 18px;
      color: ${theme("fontColorVariant")};
    }

    li.rated {
      span {
        border-radius: 5px;
        padding: 5px;
        font-weight: bold;
        color: ${theme("background")};
        background: ${theme("fontColorVariant")};
      }
    }

    li + li {
      &::before {
        display: block;
        content: "";
        margin: 0 6px;

        width: 2px;
        height: 2px;
        border-radius: 50%;
        background: ${theme("fontColorVariant")};
      }
    }
  }

  h1 {
    font-size: 60px;
    margin-bottom: 35px;
  }

  .ratings {
    display: flex;
  }
`;

interface IPosterProps {
  url: string;
}
export const Poster = styled.div<IPosterProps>`
  flex: 1;
  background-color: cyan;
  background-size: cover;
  background-image: url(${prop("url")});
  border-radius: 8px;
`;
