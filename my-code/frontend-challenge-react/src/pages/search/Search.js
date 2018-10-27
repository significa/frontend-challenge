import React from 'react';
import styles from './Search.module.scss';
import Header from '../../components/header/Header';
import SearchBar from '../../components/searchBar/SearchBar';

const Search = () => (
  <div className={styles.container}>
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="box">
          <Header />
          <SearchBar />
        </div>
      </div>
    </div>
  </div>
);

export default Search;
