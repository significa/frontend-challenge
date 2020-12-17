/**
 * Layout component: header + main
 */

import React from "react";
import PropTypes from "prop-types";

import logo from "../assets/logos/logo.svg";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout__header">
        <img src={logo} alt="logo" />
      </header>
      <main className="layout__main">{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
