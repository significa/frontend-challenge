import React from "react";
import { Link } from "react-router-dom";
import ArrowBackGrey from "../../images/1.Icons/icon-arrow-grey.svg";

const Arrow = ({ className, type, alt, to }) => {
  return (
    <div className={className}>
      <Link to={to}>
        <img src={type === "back" && ArrowBackGrey} alt={alt} />
      </Link>
    </div>
  );
};

export default Arrow;
