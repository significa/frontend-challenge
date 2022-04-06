import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "../components/layout";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
