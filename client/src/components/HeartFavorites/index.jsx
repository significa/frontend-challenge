import React from "react";
import heartIconGrey from "../../images/1.Icons/icon-heart-grey.svg";
import heartIconWhite from "../../images/1.Icons/icon-heart-white.svg";
import heartIconFull from "../../images/1.Icons/icon-heart-full.svg";

const HeartFavorites = ({ style, className, type, alt }) => {
  const displayedHeart = () => {
    switch (type) {
      case "white":
        return heartIconWhite;
      case "grey":
        return heartIconGrey;
      default:
        return heartIconFull;
    }
  };

  return (
    <img
      src={displayedHeart()}
      alt={alt}
      style={style && { ...style }}
      className={className}
    />
  );
};

export default HeartFavorites;
