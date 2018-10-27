import React from 'react';
import styles from './Search.module.scss';
import Header from '../../components/header/Header';
import SearchBar from '../../components/searchBar/SearchBar';
import searchIllustration from '../../img/searchIllustration.png';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
    this.queryHandler = this.queryHandler.bind(this);
  }

  queryHandler(query) {
    this.setState({
      query,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="box">
              <Header />
              <SearchBar action={this.queryHandler} />

              <div className={styles.emptyContainer}>
                <img src={searchIllustration} alt="illustration" className={styles.searchIllustration} />
                <div>
                  <h3 className={styles.searchIllustrationDesc}>
                    Don&apos;t know what to
                    <br />
                    search?
                  </h3>

                </div>
                <p className={styles.searchIllustrationSecondDesc}>
                  Here&apos;s an offer you can&apos;t refuse
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
