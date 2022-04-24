import { Typography } from "@mui/material";

 const Text = ({ title }: { title: string })=> {
  return (
    <Typography
      variant="subtitle1"
      gutterBottom
      color="primary.contrastText"
    >
      {title}
    </Typography>
  );
}
export default Text;