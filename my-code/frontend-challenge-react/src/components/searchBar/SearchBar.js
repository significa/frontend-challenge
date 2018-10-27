import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.scss';
import searchIcon from '../../img/searchIcon.svg';

const SearchBar = props => (

  /* Disabled input
    <div className={[styles.searchBarContainer, styles.searchBarContainerDisabled].join(' ')}>
      <img src={searchIcon} alt="search" className={styles.ciao} />
      <input type="text" placeholder="Search movies..." className={styles.searchBar} disabled />
    </div>
  */

  <div className={styles.searchBarContainer}>
    <img src={searchIcon} alt="search" className={styles.ciao} />
    <input
      type="text"
      placeholder="Search movies..."
      className={styles.searchBar}
      onChange={(e) => {
        props.action(e.target.value);
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
