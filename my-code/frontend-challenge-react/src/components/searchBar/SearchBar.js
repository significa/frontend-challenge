import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.scss';
import searchIcon from '../../img/searchIcon.svg';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryString: '',
    };
  }

  render() {
    const { query, action } = this.props;
    const { queryString } = this.state;

    /* Disabled input
      <div className={[styles.searchBarContainer, styles.searchBarContainerDisabled].join(' ')}>
          <img src={searchIcon} alt="search" />
          <input
            type="text"
            placeholder="Search movies..."
            className={styles.searchBar}
            onChange={(e) => {
              action(e.target.value);
            }}
            disabled
          />
        </div>
    */

    if (query === null) {
      return (
        <div className={styles.searchBarContainer}>
          <img src={searchIcon} alt="search" />
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
    }
    if (queryString === null) {
      return (
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
    }
    return (
      <div className={styles.searchBarContainer}>
        <img src={searchIcon} alt="search" className={styles.ciao} />
        <input
          type="text"
          placeholder="Search movies..."
          className={styles.searchBar}
          onChange={(e) => {
            action(e.target.value);
            this.setState({
              queryString: null,
            });
          }}
          value={query}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  action: PropTypes.func,
  query: PropTypes.string,
};

SearchBar.defaultProps = {
  action: null,
  query: null,
};

export default SearchBar;
