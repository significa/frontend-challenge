import React from "React";

import logo from "../../../../assets/logos/logo-rotten-tomatoes.svg";

const RottenTomatoes = ({ ...attrs }) => (
  <img {...attrs} src={logo} alt="Rotten Tomatoes" />
);

export default RottenTomatoes;
