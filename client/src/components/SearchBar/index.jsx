import React from "react";
// import MagnifierDisabled from "../../images/1.Icons/icon-magnifier-disabled.svg";
import MagnifierGrey from "../../images/1.Icons/icon-magnifier-grey.svg";
import "./style.scss";

const SearchBar = ({ searchText, setSearchText }) => {
  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };
  return (
    <div className="d-flex bg-white searchbar-container font-regular w-100">
      <img src={MagnifierGrey} alt="magnifier disable" />
      <input
        type="text"
        placeholder="Search movies..."
        className="col-md-6 col-sm-9 p-0"
        value={searchText}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
