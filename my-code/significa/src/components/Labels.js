import React from "react";
import styled from "@emotion/styled";

import logoImdb from "../assets/logos/logo-imdb.svg";
import logoRotten from "../assets/logos/logo-rotten-tomatoes.svg";

// Label with logo and rating
const Label = styled.div`
  position: relative;
  max-width: fit-content;
  display: flex;
  flex-flow: row nowrap;
  margin: 12px 16px 12px 0;
  color: #fff;
`;
const Logo = styled.img`
  padding: 8px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
`;
const Rating = styled.div`
  font-size: 16px;
  padding: 8px;
  border: 1px #353f4c solid;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  border-left: none;
  line-height: 1.7;
`;

const LabelLogo = ({ imdb, rotten, rating }) => {
  const logo = imdb ? logoImdb : rotten ? logoRotten : null;

  return (
    <Label className="label">
      <Logo
        src={logo}
        alt="logo"
        className="label__logo"
        style={
          imdb ? { backgroundColor: "#FF9F1C" } : { backgroundColor: "#FF4040" }
        }
      />
      <Rating className="label__rating">
        {imdb ? rating + "/10" : rating}
      </Rating>
    </Label>
  );
};

// Label with rated info
const Rated = styled.span`
  max-width: fit-content;
  border-radius: 4px;
  font-size: 16px;
  padding: 4px 6px;
  background-color: #7a8c99;
  color: #0a1014;
`;

const LabelRated = ({ rated }) => {
  return <Rated className="label-rated">{rated}</Rated>;
};

// export both components
export { LabelLogo, LabelRated };
