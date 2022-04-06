import { Container, Paper, Box ,Chip,Rating,ImageListItemBar} from "@mui/material";
import { styled } from "@mui/material/styles";

export const Header = styled(Paper)(({ theme }) => ({
  backgroundColor: "#0a1014",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  justifyContent: "flex-start",
}));

export const Main = styled(Container)(() => ({
  bgcolor: "#0a1014",
  height: "100vh",
  marginTop: "1rem",
}));

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#0a1014",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  color: theme.palette.text.secondary,
  boxShadow:"none"
}));

export const FormWrapper = styled(Box)(() => ({
  backgroundColor: "#FAFAFA",
  borderRadius: "0.5rem",
}));
export const PageWrapper = styled(Box)(() => ({
  flexGrow: 1,
  paddingTop:"0.6rem"
}));

export const Badge = styled(Chip)(() => ({
  borderRadius: 1,
  color: "#FAFAFA",
  backgroundColor: "#808080",
}));

export const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#fff',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export const ItemBar = styled(ImageListItemBar)({
  '.css-dasnyc-MuiImageListItemBar-title': {
    whiteSpace: "wrap",
    background: "rgba(0, 0, 0, 0.85)",
    marginTop:20
  },
});
