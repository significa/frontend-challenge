import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
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
  justify-content: center;
  height: inherit;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 5px 16px 0 0;
  padding: 0;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    width: fit-content;
  }
`;
const HeartIcon = styled.img`
  object-fit: fill;
  padding: 12px;
  height: 16px;
  box-sizing: revert;
`;
const Text = styled.div`
  font-size: 16px;
  padding: 12px 16px 12px 0;
  white-space: nowrap;
`;

/* Button for adding favourites */
const BtnFavNo = styled(Button)`
  border: 1px #353f4c solid;
  color: #7a8c99;
  background-color: #0a1014;
  :hover {
    border: 1px #ff4040 solid;
    color: #fff;
    transition: border 1s, color 1s;
  }
`;

const ButtonFavNo = () => {
  const [heart, setHeart] = useState(heartGrey);
  const isSmall = useMediaQuery({ minWidth: 500, maxWidth: 599 });
  const isMediumLarge = useMediaQuery({ minWidth: 600 });

  return (
    <BtnFavNo
      className="btn"
      onMouseEnter={() => setHeart(heartWhite)}
      onMouseLeave={() => setHeart(heartGrey)}
    >
      <HeartIcon
        src={heart}
        alt="heart icon"
        className="btn__icon"
        data-testid="favNo"
      />
      {isSmall ? (
        <Text>Like</Text>
      ) : isMediumLarge ? (
        <Text>Add to favourites</Text>
      ) : null}
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
  const isMediumLarge = useMediaQuery({ minWidth: 500 });

  return (
    <BtnFav className="btn">
      <HeartIcon
        src={heartFull}
        alt="heart icon"
        className="btn__icon"
        data-testid="favYes"
      />
      {isMediumLarge ? <Text>Added</Text> : null}
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
  padding: 10px 0 20px 0;
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
