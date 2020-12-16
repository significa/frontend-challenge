/**
 * Layout component
 */

import React from "react";
import PropTypes from "prop-types";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
