import React from "react";

import "./style.scss";

const Loader = ({ style }) => {
  return <div className="lds-dual-ring" style={style}></div>;
};

export default Loader;
