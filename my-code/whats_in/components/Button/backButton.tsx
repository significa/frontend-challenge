import { IconButton } from "@mui/material";
import { Header } from "../../styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();
  return (
    <Header elevation={0}>
      <IconButton
        color="secondary"
        edge="end"
        sx={{ border: "0.2px solid #000", borderRadius: "0.4rem" }}
        onClick={() => {
          router.back();
        }}
      >
        <ArrowBackIcon sx={{ fill: "grey" }} />
      </IconButton>
    </Header>
  );
};
export default BackButton;
