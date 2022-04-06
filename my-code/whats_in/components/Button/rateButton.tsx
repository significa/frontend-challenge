import { Button } from "@mui/material";

interface buttonType {
  title: string;
}

const RateButton = ({ title }: buttonType) => {
  return (
    <Button variant="outlined" sx={{ color: "#fff", borderColor: "#808080" }}>
      {title}
    </Button>
  );
};
export default RateButton;
