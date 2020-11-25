import React, { useState } from 'react';
import Layout from '../../shared/Layout';
import SearchBar from '../../shared/SearchBar';

const Search = () => {
  const [searchTitle, setSearchTitle] = useState('');

  const handlerChange = e => {
    setSearchTitle(e.target.value);
  };

  return (
    <Layout>
      <SearchBar onChange={handlerChange} value={searchTitle} />
    </Layout>
  );
};

export default Search;
