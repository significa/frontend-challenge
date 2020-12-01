import React from "react";

import "./styles.scss";

const styles = { color: "#7a8c99" };

const BehindTheScenes = ({ header, headerProperites }) => {
  return (
    <div className="info-container">
      <h3 className="font-regular" style={styles}>
        {header}
      </h3>
      <ul className="p-0 mt-3">
        {headerProperites.map((item) => (
          <li key={item} className="p-0 mt-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BehindTheScenes;
