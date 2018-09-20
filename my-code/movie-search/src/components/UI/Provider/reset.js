import { css } from "styled-components";

export default css`
  pre,
  textarea {
    overflow: auto;
  }
  [hidden],
  audio:not([controls]),
  template {
    display: none;
  }
  details,
  main,
  summary {
    display: block;
  }
  input[type="search"],
  input[type="text"],
  input[type="email"] {
    -webkit-appearance: none;
  }
  input[type="*"] {
    -webkit-appearance: none;
  }
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  progress {
    display: inline-block;
  }
  small {
    font-size: 100%;
  }
  textarea {
    resize: vertical;
  }
  [unselectable] {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  *,
  ::after,
  ::before {
    box-sizing: inherit;
    border-style: solid;
    border-width: 0;
  }
  * {
    font-size: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
  }
  ::after,
  ::before {
    text-decoration: inherit;
    vertical-align: inherit;
  }
  :root {
    -ms-overflow-style: -ms-autohiding-scrollbar;
    overflow-y: scroll;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
    box-sizing: border-box;
    cursor: default;
    font: 16px/1.5 sans-serif;
    text-rendering: optimizeLegibility;
  }
  a {
    text-decoration: none;
  }
  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }
  button,
  input,
  select,
  textarea {
    background-color: transparent;
    color: inherit;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
    min-height: 1.5em;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
  }
  nav ol,
  nav ul {
    list-style: none;
  }
  ul li {
    list-style: none;
  }
  select {
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  select::-ms-expand {
    display: none;
  }
  select::-ms-value {
    color: currentColor;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  ::-moz-selection {
    background-color: #b3d4fc;
    text-shadow: none;
  }
  ::selection {
    background-color: #b3d4fc;
    text-shadow: none;
  }
  @media screen {
    [hidden~="screen"] {
      display: inherit;
    }
    [hidden~="screen"]:not(:active):not(:focus):not(:target) {
      clip: rect(0 0 0 0) !important;
      position: absolute !important;
    }
  }
  /* Input reset */
  input,
  label,
  select,
  button,
  textarea {
    display: inline-block;
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-size: 13px;
    line-height: 1;
    border: 0;
    background: none;
    vertical-align: middle;
    white-space: normal;
  }
  input:focus {
    outline: 0;
  }
  input,
  textarea {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  button,
  input[type="reset"],
  input[type="button"],
  input[type="submit"],
  input[type="checkbox"],
  input[type="radio"],
  select {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  input[type="date"],
  input[type="datetime"],
  input[type="datetime-local"],
  input[type="email"],
  input[type="month"],
  input[type="number"],
  input[type="password"],
  input[type="range"],
  input[type="search"],
  input[type="tel"],
  input[type="text"],
  input[type="time"],
  input[type="url"],
  input[type="week"] {
  }
  input[type="checkbox"],
  input[type="radio"] {
    display: none;
    width: 13px;
    height: 13px;
  }
  input[type="search"] {
    -webkit-box-sizing: content-box;
    -webkit-appearance: textfield;
  }
  ::-webkit-search-decoration {
    display: none;
  }
  button,
  input[type="reset"],
  input[type="button"],
  input[type="submit"] {
    overflow: visible;
  }
  ::-webkit-file-upload-button {
    padding: 0;
    border: 0;
    background: none;
  }
  textarea {
    overflow: auto;
    vertical-align: top;
  }
  select[multiple] {
    vertical-align: top;
  }

  /* Hide HTML5 Up and Down arrows. */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
