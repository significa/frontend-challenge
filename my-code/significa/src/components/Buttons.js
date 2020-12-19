import React, { useState } from "react";
import styled from "@emotion/styled";

import heartWhite from "../assets/icons/icon-heart-white.svg";
import heartGrey from "../assets/icons/icon-heart-grey.svg";
import heartFull from "../assets/icons/icon-heart-full.svg";
import arrowWhite from "../assets/icons/icon-arrow-white.svg";
import arrowGrey from "../assets/icons/icon-arrow-grey.svg";

/* General button styling */
const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  height: fit-content;
  width: fit-content;
  margin: 12px 16px 12px 0;
`;
const HeartIcon = styled.img`
  max-height: 18px;
  padding: 12px;
`;
const Text = styled.div`
  font-size: 16px;
  padding: 12px 16px 12px 0;
`;

/* Button for adding favourites */
const BtnFavNo = styled(Button)`
  border: 1px #353f4c solid;
  color: #7a8c99;
  background-color: #0a1014;
  height: fit-content;
  width: fit-content;
  :hover {
    border: 1px #ff4040 solid;
    color: #fff;
    transition: all 1s;
  }
`;

const ButtonFavNo = () => {
  const [heart, setHeart] = useState(heartGrey);

  return (
    <BtnFavNo
      className="btn"
      onMouseEnter={() => setHeart(heartWhite)}
      onMouseLeave={() => setHeart(heartGrey)}
    >
      <HeartIcon src={heart} alt="heart icon" className="btn__icon" />
      <Text>Add to favourites</Text>
    </BtnFavNo>
  );
};

/* Button for favourites */
const BtnFav = styled(Button)`
  border: 1px #ff4040 solid;
  color: #fff;
  background-color: #ff4040;
`;

const ButtonFavYes = () => {
  return (
    <BtnFav className="btn">
      <HeartIcon src={heartFull} alt="heart icon" className="btn__icon" />
      <Text>Added</Text>
    </BtnFav>
  );
};

/* Arrow to go back to 'home' */
const Arrow = styled.div`
  position: relative;
  max-width: fit-content;
  padding: 5px 10px 5px 0;
`;
const ArrowIcon = styled.img`
  max-height: 18px;
  padding: 12px;
`;

const ButtonArrow = () => {
  const [arrow, setArrow] = useState(arrowGrey);

  return (
    <Arrow
      className="arrow"
      onMouseEnter={() => setArrow(arrowWhite)}
      onMouseLeave={() => setArrow(arrowGrey)}
    >
      <ArrowIcon src={arrow} alt="arrow icon" className="arrow__icon" />
    </Arrow>
  );
};

/* export all components */
export { ButtonFavNo, ButtonFavYes, ButtonArrow };
