import {
  CardImageStyle,
  ContainerStyle,
  LgItem,
  MdItem,
  SmItem,
} from "./card.style";
type ImageSizes = "small" | "medium" | "large";

const Card = ({ imageUrl, size }: { imageUrl: string; size: ImageSizes }) => {
  const ClassMap = {
    large: LgItem,
    medium: MdItem,
    small: SmItem,
  };
  if (size === "large") {
    return (
      <ContainerStyle>
        <ClassMap.large>
          <CardImageStyle src={imageUrl} alt="image" layout="fill" />
        </ClassMap.large>
      </ContainerStyle>
    );
  } else if (size === "medium") {
    return (
      <ContainerStyle>
        <ClassMap.medium>
          <CardImageStyle src={imageUrl} alt="image" layout="fill" />
        </ClassMap.medium>
      </ContainerStyle>
    );
  } else {
    return (
      <ContainerStyle>
        <ClassMap.small>
          <CardImageStyle src={imageUrl} alt="image" layout="fill" />
        </ClassMap.small>
      </ContainerStyle>
    );
  }
};

export default Card;
