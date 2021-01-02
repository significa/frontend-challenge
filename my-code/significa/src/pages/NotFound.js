import React from "react";
import { Link } from "@reach/router";

import Layout from "../components/layout";
import logo from "../assets/logos/logo-icon.svg";
import "./Movie.css";

const NotFound = () => (
    <Layout>
        <div className="movie-not-found message">
            <h1 className="movie-not-found__text">
            Hmmm... we can't find anything. Are you sure this is a valid url?
            </h1>
            <Link to="/" className="message__link">
                <img src={logo} alt="what's in logo" className="message__link__img"/>
                {` `}Try again
            </Link>
        </div>
    </Layout>
);

export default NotFound;
