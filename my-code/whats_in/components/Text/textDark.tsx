import { Typography } from "@mui/material";

 const TextDark = ({ title }: { title: string })=> {
  return (
    <Typography
      variant="subtitle1"
      gutterBottom
      component="div"
      color="primary.dark"
    >
      {title}
    </Typography>
  );
}
export default TextDark;