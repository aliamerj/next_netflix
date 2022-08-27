import { styled } from "@mui/material/styles";
export const BannerContainer = styled("div")(() => ({}));

export const SmItem = styled("div")(() => ({
  width: "300px",
  minWidth: "300px",
  height: "170px",
  minHeight: "170px",
}));
export const MdItem = styled("div")(() => ({
  width: "158px",
  minWidth: "158px",
  height: "280px",
  minHeight: "280px",
}));
export const LgItem = styled("div")(() => ({
  width: "218px",
  minWidth: "218px",
  height: "434px",
  minHeight: "434px",
}));

export const SizeMape = styled("div")(({ size }: { size: string }) => ({
  LgItem,
}));
