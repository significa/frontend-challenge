import { Typography } from "@mui/material";

const TextBody = ({ title }: { title: string }) => {
  return (
    <Typography variant="body1" gutterBottom color="primary.contrastText">
      {title}
    </Typography>
  );
};
export default TextBody;
