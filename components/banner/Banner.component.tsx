import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  BannerContainer,
  BannerLeftContainer,
  ButtonStyle,
  SubTitleStyle,
  TitleStyle,
} from "./banner.style";
import Navbar from "../navbar/Navbar.component";

const Banner = ({
  title,
  subtitle,
  imageUrl,
}: {
  title: string;
  subtitle: string;
  imageUrl: string;
}) => {
  return (
    <BannerContainer imageUrl={imageUrl}>
      <Navbar username="ali" />
      <BannerLeftContainer>
        <TitleStyle>{title}</TitleStyle>
        <SubTitleStyle>{subtitle}</SubTitleStyle>
        <ButtonStyle
          onClick={() => console.log("Click")}
          variant="contained"
          startIcon={<PlayArrowIcon sx={{ color: "black" }} />}
          color="inherit"
        >
          <span style={{ color: "black" }}>Play</span>
        </ButtonStyle>
      </BannerLeftContainer>
    </BannerContainer>
  );
};

export default Banner;
