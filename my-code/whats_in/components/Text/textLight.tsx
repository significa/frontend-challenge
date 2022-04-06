import { Typography } from "@mui/material";

 const TextLight = ({ title }: { title: string })=> {
  return (
    <Typography
      variant="subtitle1"
      gutterBottom
      component="div"
      color="primary.contrastText"
    >
      {title}
    </Typography>
  );
}
export default TextLight;