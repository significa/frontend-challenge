import React from 'react';
import styles from './SearchBar.module.scss';
import searchIcon from '../../img/searchIcon.svg';

const SearchBar = () => (

  /* Disabled input
    <div className={[styles.searchBarContainer, styles.searchBarContainerDisabled].join(' ')}>
      <img src={searchIcon} alt="search" className={styles.ciao} />
      <input type="text" placeholder="Search movies..." className={styles.searchBar} disabled />
    </div>
  */

  <div className={styles.searchBarContainer}>
    <img src={searchIcon} alt="search" className={styles.ciao} />
    <input type="text" placeholder="Search movies..." className={styles.searchBar} />
  </div>
);

export default SearchBar;
