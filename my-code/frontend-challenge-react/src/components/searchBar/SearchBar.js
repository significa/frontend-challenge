import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.scss';
import searchIcon from '../../img/searchIcon.svg';

const SearchBar = ({ action }) => (
  <div className={styles.searchBarContainer}>
    <img src={searchIcon} alt="search" className={styles.ciao} />
    <input
      type="text"
      placeholder="Search movies..."
      className={styles.searchBar}
      onChange={(e) => {
        action(e.target.value);
      }}
    />
  </div>
);

SearchBar.propTypes = {
  action: PropTypes.func,
};

SearchBar.defaultProps = {
  action: null,
};

export default SearchBar;
