import React from "react";

import Layout from "../components/layout";
import magnifier from "../assets/icons/icon-magnifier-grey.svg";
import illustrationSm from "../assets/illustrations/illustration-empty-state.png";
import illustrationLg from "../assets/illustrations/illustration-empty-state@2x.png";
import "./Home.css";

const Home = () => {
  /* set variables that use state */

  /* function that handles change in the search bar */
  const handleChange = () => {
    console.log("there was some change!!!");
  };

  /* fetch list of movies from the api */

  /* render if there was an error getting the data */

  /* render if data is loading */

  /* render list of movies if there's any */

  /* render initial search bar + illustration if no request has been made */
  return (
    <Layout>
      <div className="search-bar">
        <img src={magnifier} alt="magnifier" className="search-bar__icon" />
        <input
          type="text"
          id="search"
          placeholder="Search movies..."
          onChange={handleChange}
          className="search-bar__input"
        />
      </div>
      <section className="initial-block">
        <div className="initial-block__image-container">
          <picture>
            <source media="(min-width:768px)" srcSet={illustrationLg} />
            <img
              src={illustrationSm}
              alt="illustration of a horse's severed head"
              className="initial-block__image"
            />
          </picture>
        </div>
        <h2 className="initial-block__title">Don't know what to search?</h2>
        <h4 className="initial-block__subtitle">
          Here's an offer you can't refuse...
        </h4>
      </section>
    </Layout>
  );
};

export default Home;
