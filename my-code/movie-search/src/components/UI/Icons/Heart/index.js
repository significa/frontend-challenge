import React from "react";
import PropTypes from "prop-types";

import colors from "../../Provider/colors";

const Heart = ({ color, ...props }) => (
  <svg {...props} width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        className="iconHeart-Outline"
        d="M12 5.738C24.316-3.878 26.313 14.49 12 20-2.313 15.57-.316-3.878 12 5.738z"
        stroke={color}
        strokeWidth="2"
      />
    </g>
  </svg>
);

Heart.propTypes = { color: PropTypes.string };
Heart.defaultProps = { color: colors.greyscale.grey.default };

export default Heart;
