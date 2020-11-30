import React from "react";

import "./styles.scss";

const BehindTheScenes = ({ header, headerProperites }) => {
  return (
    <div className="info-container">
      <h3 className="font-regular">{header}</h3>
      <ul className="p-0">
        {headerProperites.map((item) => (
          <li key={item} className="p-0">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BehindTheScenes;
