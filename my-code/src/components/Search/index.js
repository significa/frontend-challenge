import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input } from './styles';

import api, { API_KEY } from '../../services/api';

function Search({ isDisabled, dispatch, addToMoviesRequest }) {
  const ENTER_KEY = 'Enter';
  // const { isDisabled } = props;

  const [searchStr, setSearchStr] = useState('');

  useEffect(() => {
    let movies = localStorage.getItem('movies');
    if (movies) {
      movies = JSON.parse(movies);
    } else {
      movies = [];
    }

    dispatch({
      type: 'ADD_MOVIES',
      movies,
    });
  }, [dispatch]);

  function handleSearch(e) {
    e.persist();

    if (e.key === ENTER_KEY) {
      api
        .get('/', {
          params: { apikey: API_KEY, s: searchStr },
        })
        .then(res => {
          const movies = res.data.Search;
          // addToMoviesRequest(movies);
          localStorage.setItem('movies', JSON.stringify(movies));
          dispatch({
            type: 'ADD_MOVIES',
            movies,
          });
        });
    } else {
      setSearchStr(e.target.value);
    }
  }

  return (
    <Input
      type="text"
      placeholder="Search movies..."
      isDisabled={isDisabled}
      value={searchStr}
      onChange={e => setSearchStr(e.target.value)}
      onKeyPress={handleSearch}
    />
  );
}

Search.propTypes = {
  props: PropTypes.shape({
    isDisabled: PropTypes.bool,
  }),
};

Search.defaultProps = {
  props: {
    isDisabled: false,
  },
};

export default connect()(Search);
