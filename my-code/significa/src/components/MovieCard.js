import React, { useState } from "react";
import styled from "@emotion/styled";

import heartWhite from "../assets/icons/icon-heart-white.svg";
import heartFull from "../assets/icons/icon-heart-full.svg";

const Container = styled.div`
  position: relative;
  z-index: 6;
  width: 250px;
  height: 100%;
  border-radius: 5px;
  @media only screen and (min-width: 400px) {
    width: 130px;
    height: 180px;
  }
  @media only screen and (min-width: 600px) {
    width: 180px;
    height: 240px;
  }
`;
const CardPicture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
`;
/* const CardPicturePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: red;
`; */
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  padding: 12px;
  background-color: #000;
  opacity: 0;
  color: #fff;
  :hover {
    opacity: 1;
    background-color: #000000b3;
    transition: all 0.5s;
  }
  @media only screen and (max-width: 768px) {
    opacity: 1;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 25%,
      rgba(255, 255, 255, 0) 75%
    );
  }
`;
const HeartIcon = styled.img`
  position: absolute;
  z-index: 4;
  right: 12px;
  top: 12px;
`;
const Info = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  text-align: left;

  h2 {
    margin: 0;
    font-size: 1.2rem;
  }
  p {
    margin: 5px 0;
    font-size: 1rem;
  }
  @media only screen and (min-width: 400px) and (max-width: 600px) {
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

const MovieCard = ({ id, imgSrc, title, year }) => {
  const [heart, setHeart] = useState(() => {
    let favourites = localStorage.getItem("favourites");
    if (favourites != null) {
      favourites = favourites.split(",");
      if (favourites.includes(id)) {
        return heartFull;
      }
      return heartWhite;
    }
  });

  return (
    <Container className="card">
      {imgSrc !== "N/A" ? (
        <CardPicture src={imgSrc} alt={title} className="card__picture" />
      ) : (
        <CardPicture
          src="http://placecorgi.com/240/180"
          alt="placeholder image"
          className="card__picture"
        />
      )}
      {heart === heartFull ? (
        <HeartIcon className="card__icon" src={heart} alt="icon favourites" />
      ) : null}
      <Overlay className="card__overlay">
        {heart === heartWhite ? (
          <HeartIcon
            className="card__overlay__icon"
            src={heart}
            alt="icon favourites"
          />
        ) : null}
        <Info>
          <h2>{title}</h2>
          <p>{year}</p>
        </Info>
      </Overlay>
    </Container>
  );
};

export default MovieCard;
