import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BannerContainer = styled("div")(
  ({ imageUrl }: { imageUrl: string }) => ({
    backgroundImage: `url(${imageUrl})`,
    width: "100%",
    height: "70%",
    position: "absolute",
    backgroundSize: "cover",
    backgroundPosition: "25% 25%",
  })
);
export const BannerLeftContainer = styled("div")(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "35px",
}));
export const TitleStyle = styled("h1")(() => ({
  fontSize: 70,
}));
export const SubTitleStyle = styled("p")(() => ({
  fontSize: 25,
}));
export const ButtonStyle = styled(Button)(() => ({
  width: "100px",
  height: "40px",
  margin: "10px",
  borderRadius: "10px",
}));
