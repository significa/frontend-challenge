import { Grid } from "@mui/material";
import { Main, Header } from "../styles";
import Image from "next/image";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <Main>
      <Grid container spacing={3}>
        <Grid item xs={6} md={12}>
          <Header elevation={0}>
            <Image
              src="/logo.png"
              alt="whats in logo"
              width={120}
              height={35}
            />
          </Header>
        </Grid>
      </Grid>
      {children}
    </Main>
  );
};

export default Layout;
