import React from "react";
import debounce from "lodash/debounce";
import Searchbar from "../../components/Searchbar";

const Home: React.FC = () => {
  const [isSearching, setIsSearching] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const handleSearch = React.useCallback(
    debounce(async (e: React.FormEvent<HTMLInputElement>): void => {
      const target = e.target as HTMLInputElement;
      setSearch(target.value);
      setIsSearching(false);
    }, 1000),
    [search]
  );

  const handleKeyUp = React.useCallback(() => {
    setIsSearching(true);
  }, [isSearching]);

  return (
    <React.Fragment>
      <Searchbar onChange={handleSearch} onKeyUp={handleKeyUp} />
      <h1>{isSearching ? "Searching..." : search}</h1>
    </React.Fragment>
  );
};

export default Home;
