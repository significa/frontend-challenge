import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from './styles';

import api, { API_KEY } from '../../services/api';

export default function Search({ isDisabled }) {
  const ENTER_KEY = 'Enter';
  // const { isDisabled } = props;
  const dispatch = useDispatch();

  // states
  const [searchStr, setSearchStr] = useState('');

  function handleSearch(e) {
    e.persist();

    if (e.key === ENTER_KEY) {
      api
        .get('/', {
          params: { apikey: API_KEY, s: searchStr },
        })
        .then(res => {
          const resultMovies = res.data.Search;
          dispatch({
            type: 'ADD_MOVIES',
            movies: resultMovies,
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
