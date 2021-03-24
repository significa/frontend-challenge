import styled from "styled-components";
import { theme } from "styled-tools";

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 25px 0;
  background: ${theme("background")};

  .circle-shape {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    border: 4px solid ${theme("fontColor")};
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 8px;
    svg {
      font-size: 12px;
      color: ${theme("yellow")};
    }
  }

  strong {
    font-size: 20px;
  }
`;
