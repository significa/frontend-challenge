import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { Container, Input } from './styles';
import { fetchData } from '../../services/api';
import LoadingIndicator from '../LoadingIndicator';

export default function Search({ isDisabled }) {
  const ENTER_KEY = 'Enter';
  const dispatch = useDispatch();
  const perPage = 10;
  const inputRef = useRef(null);

  // states
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [searchStr, setSearchStr] = useState('');

  // Redux state: get the movies list.
  const movies = useSelector(state => {
    return state.movieReducer;
  });

  useEffect(() => {
    setSearchStr(movies.searchStr);
  }, []);

  /**
   * Fetches data from the API.
   * @param {integer} currentPage
   */
  async function getData(currentPage) {
    setIsLoading(true);
    const searchResult = await fetchData(searchStr, currentPage, perPage);

    dispatch({
      type: 'ADD_MOVIES',
      movies: searchResult,
    });

    if (searchResult.totalResults === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    setIsLoading(false);
  }

  /**
   * Handles the search.
   * @param {*} e
   */
  function handleSearch(e) {
    e.persist();

    if (e.key === ENTER_KEY) {
      getData(1);
    } else {
      setSearchStr(e.target.value);
    }
  }

  /**
   * Handles the clear search button click.
   */
  function handleClear() {
    setSearchStr('');
    inputRef.current.focus();
    dispatch({
      type: 'ADD_MOVIES',
      movies: {
        totalResults: 0,
        page: 0,
        pageCount: 0,
        searchStr: '',
        list: [],
      },
    });
  }

  return (
    <Container>
      <Input
        ref={inputRef}
        type="text"
        placeholder="Search movies..."
        isDisabled={isDisabled}
        value={searchStr}
        onChange={e => setSearchStr(e.target.value)}
        onKeyPress={handleSearch}
        autoFocus
      />

      {searchStr.length > 0 && (
        <button type="button" onClick={handleClear}>
          <MdClose />
        </button>
      )}

      {isLoading && <LoadingIndicator text="Searching movies database..." />}

      {notFound && <div className="not-found">Movie not found.</div>}
    </Container>
  );
}

Search.propTypes = {
  isDisabled: PropTypes.bool,
};

Search.defaultProps = {
  isDisabled: false,
};
