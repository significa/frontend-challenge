import styled from "styled-components";
import { prop, theme } from "styled-tools";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
`;

export const MovieInfoContainer = styled.div`
  flex: 1.35;
  ul.runtime-rated-title {
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
  width: 40%;
  max-height: 85%;
  background-color: cyan;
  background-size: cover;
  background-position: center;
  background-image: url(${prop(
    "url",
    "https://place-hold.it/250x400/FF9F1C&text=N/A"
  )});
  border-radius: 8px;
  max-height: 80;
`;

export const PlotContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  max-width: 65%;
  strong {
    color: ${theme("fontColorVariant")};
    margin-bottom: 10px;
  }
  p {
    line-height: 1.6;
  }
`;

export const CastGenreDirector = styled.ul`
  margin-top: 40px;
  display: flex;
  list-style: none;
  width: 65%;

  li {
    display: flex;
    flex-direction: column;
    strong {
      color: ${theme("fontColorVariant")};
      margin-bottom: 15px;
    }
    span {
      line-height: 1.6;
      color: ${theme("fontColor")};
    }
  }
  li + li {
    margin-left: auto;
  }
`;
