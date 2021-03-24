import React from "react";
import debounce from "lodash/debounce";
import Searchbar from "../../components/Searchbar";
import api from "../../services/api";
import isCharacterKeyPress from "../../utils/isCharacterKeyPress";

enum SearchStates {
  Idle,
  Loading,
  Loaded,
  Error,
}

interface ISearchResult {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

const Home: React.FC = () => {
  const [searchState, setSearchState] = React.useState(SearchStates.Idle);
  const [search, setSearch] = React.useState("");
  const [searchData, setSearchData] = React.useState<ISearchResult[]>([]);

  const handleSearch = React.useCallback(
    debounce(async (e: React.FormEvent<HTMLInputElement>): Promise<void> => {
      try {
        const target = e.target as HTMLInputElement;
        setSearch(target.value);
        const { data } = await api.get(`?apikey=4788f920&s=${target.value}`);
        if (data.Response === "False") {
          setSearchState(SearchStates.Error);
          return;
        }
        setSearchData(data.Search);
        setSearchState(SearchStates.Loaded);
      } catch {
        setSearchState(SearchStates.Error);
      } finally {
      }
    }, 1000),
    [search]
  );

  const handleKeyUp = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (isCharacterKeyPress(e)) {
        setSearchState(SearchStates.Loading);
      }
    },
    [searchState]
  );

  return (
    <React.Fragment>
      <Searchbar onChange={handleSearch} onKeyDown={handleKeyUp} />
      {searchState === SearchStates.Idle && <h1>Idling...</h1>}
      {searchState === SearchStates.Loading && <h1>Searching...</h1>}
      {searchState === SearchStates.Error && <h1>Error...</h1>}
      {searchState === SearchStates.Loaded && (
        <h1>{JSON.stringify(searchData)}</h1>
      )}
    </React.Fragment>
  );
};

export default Home;
