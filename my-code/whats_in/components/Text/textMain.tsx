import { Typography } from "@mui/material";

export const TextMain = ({ title }: { title: string }) => {
  return (
    <Typography
      variant="h2"
      gutterBottom
      component="div"
      color="primary.contrastText"
      sx={{ fontWeight: 750, py: 2 }}
    >
      {title}
    </Typography>
  );
};
export default TextMain;