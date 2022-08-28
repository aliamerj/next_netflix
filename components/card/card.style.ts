import { styled } from "@mui/material/styles";
import Image from "next/image";
export const BannerContainer = styled("div")(() => ({}));

export const SmItem = styled("div")(() => ({
  width: "300px",
  minWidth: "300px",
  height: "170px",
  minHeight: "170px",
  position: "relative",
}));
export const MdItem = styled("div")(() => ({
  width: "158px",
  minWidth: "158px",
  height: "280px",
  minHeight: "280px",
  position: "relative",
}));
export const LgItem = styled("div")(() => ({
  width: "218px",
  minWidth: "218px",
  height: "434px",
  minHeight: "434px",
  position: "relative",
}));
export const CardImageStyle = styled(Image)(() => ({
  border: "3px solid blue",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",

  borderRadius: "0.375rem" /* 6px */,
  objectFit: "cover",

  objectPosition: "center",
  display: "block",

  maxWidth: "100%",
}));
export const ContainerStyle = styled("div")(() => ({
  marginRight: "0.25rem" /* 4px */,
  cursor: "pointer",
}));
