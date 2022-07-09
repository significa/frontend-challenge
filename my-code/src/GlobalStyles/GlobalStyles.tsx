import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.font.family.roboto};
  }
  body{
    color: ${theme.colors.white};
    background: ${theme.colors.dark};
    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  div,
  a,
  li,
  form {
    font-family: ${theme.font.family.roboto};
    color: ${theme.colors.white};
  }
  a{
    text-decoration: none;
  }
  button{
    cursor: pointer;
  }
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;