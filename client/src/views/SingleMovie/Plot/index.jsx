import React from "react";

const styles = { color: "#7a8c99" };

const Plot = ({ plot }) => {
  return (
    <section className="w-75 plot-container">
      <h2 className="font-regular mt-5" style={styles}>
        Plot
      </h2>
      <p>{plot}</p>
    </section>
  );
};

export default Plot;
