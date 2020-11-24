import * as React from 'react';
import MagnifierIcon from '../../../assets/icons/icon-magnifier-grey.svg';
import styles from './SearchBar.css';

const SearchBar = () => (
  <div className={styles.Wrapper}>
    <div className={styles.InputWrapper}>
      <MagnifierIcon />
      <input
        className={styles.SearchInput}
        type="text"
        placeholder="Search movies..."
      />
    </div>
  </div>
);

export default SearchBar;
