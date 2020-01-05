import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import { Input } from './styles';
import api, { API_KEY } from '../../services/api';

export default function Search({ isDisabled }) {
  const ENTER_KEY = 'Enter';
  const dispatch = useDispatch();
  const perPage = 10;

  // states
  const [notFound, setNotFound] = useState(false);
  const [searchStr, setSearchStr] = useState('');
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  // Redux state: get the movies list.
  const movies = useSelector(state => {
    return state.movieReducer;
  });

  useEffect(() => {
    setSearchStr(movies.searchStr);
    setPage(movies.page);
    setPageCount(movies.pageCount);
  }, []);

  /**
   * Fetch data from the IMDB API.
   */
  const fetchData = currentPage => {
    api
      .get('/', {
        params: { apikey: API_KEY, s: searchStr, page: currentPage },
      })
      .then(res => {
        if (res.data.Response === 'False') {
          setNotFound(true);
          setPageCount(0);
          dispatch({
            type: 'ADD_MOVIES',
            movies: {
              totalResults: 0,
              page: 0,
              pageCount: 0,
              searchStr,
              list: [],
            },
          });
        } else {
          let maxPages = Math.ceil(
            parseInt(res.data.totalResults, 10) / perPage
          );
          maxPages = maxPages > 100 ? 100 : maxPages;
          setNotFound(false);
          setPageCount(maxPages);
          dispatch({
            type: 'ADD_MOVIES',
            movies: {
              totalResults: res.data.totalResults,
              page: currentPage - 1, // zero based
              pageCount: maxPages,
              searchStr,
              list: res.data.Search,
            },
          });
        }
      });
  };

  /**
   * Handles the search.
   * @param {*} e
   */
  function handleSearch(e) {
    e.persist();

    if (e.key === ENTER_KEY) {
      fetchData(1);
    } else {
      setSearchStr(e.target.value);
    }
  }

  /**
   * Handles the click on a page number.
   * @param {*} Object
   */
  function handlePageClick({ selected }) {
    const newPage = parseInt(selected, 10) + 1;
    setPage(newPage);
    fetchData(newPage);
  }

  return (
    <>
      <Input
        type="text"
        placeholder="Search movies..."
        isDisabled={isDisabled}
        value={searchStr}
        onChange={e => setSearchStr(e.target.value)}
        onKeyPress={handleSearch}
      />

      {pageCount > 0 && (
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          breakClassName="break-me"
          disableInitialCallback
          initialPage={page}
          pageCount={pageCount}
          marginPagesDisplayed={0}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
        />
      )}

      {notFound && <div className="not-found">Movie not found.</div>}
    </>
  );
}

Search.propTypes = {
  isDisabled: PropTypes.bool,
};

Search.defaultProps = {
  isDisabled: false,
};
