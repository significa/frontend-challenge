import React from "react";

import "./styles.scss";

const Rating = ({ rate, rateSource, icon }) => {
  return (
    <div className="rating-container d-flex align-items-center">
      <img
        className="imdb-icon"
        src={icon}
        alt={rateSource}
        style={{
          backgroundColor: rateSource !== "imdbRating" && "#ff4040",
          padding: 10,
          borderColor: rateSource !== "imdbRating" && "#ff4040",
        }}
      />
      <div className="rate d-flex align-items-center m-0">
        <p className="my-0 px-2">
          {rateSource === "imdbRating" ? `${rate}/10` : `${rate}`}
        </p>
      </div>
    </div>
  );
};

export default Rating;
