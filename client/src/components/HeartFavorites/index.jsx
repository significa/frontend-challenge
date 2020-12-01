import React from "react";
import HeartIconGrey from "../../images/1.Icons/icon-heart-grey.svg";
import HeartIconWhite from "../../images/1.Icons/icon-heart-white.svg";
import HeartIconFull from "../../images/1.Icons/icon-heart-full.svg";

const HeartFavorites = ({ style, className, type, alt }) => {
  return (
    <img
      src={
        type === "white"
          ? HeartIconWhite
          : type === "grey"
          ? HeartIconGrey
          : HeartIconFull
      }
      alt={alt}
      style={style && { ...style }}
      className={className}
    />
  );
};

export default HeartFavorites;
