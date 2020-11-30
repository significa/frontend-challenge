import React from "react";
// import MagnifierDisabled from "../../images/1.Icons/icon-magnifier-disabled.svg";
import MagnifierGrey from "../../images/1.Icons/icon-magnifier-grey.svg";
import "./style.scss";

const SearchBar = ({ searchText, setSearchText }) => {
  const handleInputChange = (event) => {
    const { value } = event.target;
    console.log("this is the event value", value);
    setSearchText(value);
  };
  return (
    <div className="d-flex bg-white searchbar-container font-regular w-100">
      <img src={MagnifierGrey} alt="magnifier disable" />
      <form className="p-0 w-100">
        <input
          type="text"
          placeholder="Search movies..."
          className="p-0 w-100"
          value={searchText}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;