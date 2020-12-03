import React, { useState } from "react";

import Arrow from "../../../components/Arrow";

const ArrowBack = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return isHovered ? (
    <Arrow
      onMouseLeave={handleMouseLeave}
      type="back-white"
      className={className}
      to="/"
    />
  ) : (
    <Arrow
      onMouseEnter={handleMouseEnter}
      type="back-grey"
      className={className}
      to="/"
    />
  );
};

export default ArrowBack;
