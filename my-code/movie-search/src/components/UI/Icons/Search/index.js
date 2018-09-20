import React from "react";
import PropTypes from "prop-types";

import colors from "../../Provider/colors";

const Search = ({ color, ...props }) => (
  <svg {...props} width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h16v16H0z" />
      <path
        d="M14.667 14.667l-4-4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
      />
      <circle stroke={color} strokeWidth="2" cx="6.667" cy="6.667" r="5.333" />
    </g>
  </svg>
);

Search.propTypes = { color: PropTypes.string };
Search.defaultProps = { color: colors.greyscale.grey.light };

export default Search;
