/**
 * Layout component: header + main
 */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

import logo from "../assets/logos/logo.svg";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout__header">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </header>
      <main className="layout__main">{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
