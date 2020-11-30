import React from "react";

const Rating = ({ rate, rateSource, icon }) => {
  return (
    <div className="rating-container d-flex align-items-center">
      <img
        className="imdb-icon p-2"
        src={icon}
        alt={rateSource}
        style={{ backgroundColor: rateSource !== "imdbRating" && "#ff4040" }}
      />
      <p className="my-0 px-2">
        {rateSource === "imdbRating" ? `${rate}/10` : `${rate}`}
      </p>
    </div>
  );
};

export default Rating;
