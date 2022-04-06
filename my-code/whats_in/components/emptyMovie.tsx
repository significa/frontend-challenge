import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const EmptyMovie = () => {
  return (
    <Grid item xs={12} md={12} sx={{ mt: 8 }}>
      <Stack
        direction="column-reverse"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          component="div"
          color="primary.dark"
        >
          Here is an offer you can&apos;t refuse
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          component="div"
          color="primary.contrastText"
        >
          Don&apos;t know what to search?
        </Typography>
        <Image
          src="/illustration-empty-state.png"
          alt="movie poster"
          width={500}
          height={200}
        />
      </Stack>
    </Grid>
  );
};
export default EmptyMovie;
