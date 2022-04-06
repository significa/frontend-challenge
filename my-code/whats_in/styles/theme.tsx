import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#999999",
      contrastText: "#fff",
    },
    secondary: {
      light: "#fff",
      main: "#808080",
      dark: "yellow",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});
