import React from "react";
import { Link } from "react-router-dom";
import arrowBackGrey from "../../images/1.Icons/icon-arrow-grey.svg";
import arrowBackWhite from "../../images/1.Icons/icon-arrow-white.svg";

const Arrow = ({ className, type, alt, to, onMouseEnter, onMouseLeave }) => {
  return (
    <div className={className}>
      <Link to={to} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <img
          src={type === "back-grey" ? arrowBackGrey : arrowBackWhite}
          alt={alt}
        />
      </Link>
    </div>
  );
};

export default Arrow;
