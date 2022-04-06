import { Grid, Stack, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Grid item xs={12} md={12} sx={{ mt: 8 }}>
      <Stack
        direction="column-reverse"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <CircularProgress size={70} color="secondary"/>
      </Stack>
    </Grid>
  );
};
export default Loader;
