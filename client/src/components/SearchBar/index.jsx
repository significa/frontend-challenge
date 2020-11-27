import React, { useState, useEffect } from "react";
import MagnifierDisabled from "../../images/1.Icons/icon-magnifier-disabled.svg";
import MagnifierGrey from "../../images/1.Icons/icon-magnifier-grey.svg";
import "./style.scss";

const SearchBar = () => {
  const [currentSearch, setCurrentSearch] = useState("");

  return (
    <div className="d-flex bg-white searchbar-container font-regular">
      <img src={MagnifierDisabled} alt="magnifier disable" />
      <input
        placeholder="Search movies..."
        className="col-md-6 col-sm-9  p-0"
      />
    </div>
  );
};

export default SearchBar;
