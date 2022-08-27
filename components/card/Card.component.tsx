import Image from "next/image";
import { LgItem, MdItem, SmItem } from "./card.style";

const Card = ({ imageUrl, size }: { imageUrl: string; size: string }) => {
  const ClassMap = {
    large: LgItem,
    medium: MdItem,
    small: SmItem,
  };
  if (size === "large") {
    return (
      <ClassMap.large>
        <Image src={imageUrl} alt="image" />
      </ClassMap.large>
    );
  } else if (size === "medium") {
    return (
      <ClassMap.medium>
        <Image src={imageUrl} alt="image" />
      </ClassMap.medium>
    );
  } else if (size === "small") {
    return (
      <ClassMap.small>
        <Image src={imageUrl} alt="image" />
      </ClassMap.small>
    );
  }
};

export default Card;
