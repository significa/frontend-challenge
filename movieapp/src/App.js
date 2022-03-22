import React, {useState}  from 'react';
import axios from 'axios'
import './App.css';

import {SearchBox, SearchIcon, SearchInput, Placeholder, MovieListContainer, Container, Header} from './appStyle'
import MovieDetails from './components/MovieDetails';

const API_KEY="7c62718b"

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [timeoutId, setTimeoutId] = useState()

  const fetchData = async (searchString) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);
      setMovies(response.data.Search);
    };
  
    
 
  const handleOnChange = (e) => {
    setSelectedMovie("")
    clearTimeout(timeoutId);
    setSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    setTimeoutId(timeout);
  }

  return (
    <Container>
      <Header>
      Movie App
      <SearchBox>
          <SearchIcon src="" />
          <SearchInput
            placeholder="Search Movie"
            value={searchQuery}
            onChange={handleOnChange}
          />
        </SearchBox>
        </Header>
        {selectedMovie && <MovieDetails selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}/>}
        <MovieListContainer>
        {movies?.length ? (
          movies.map((movie, index) => (
            <MovieDetails
              key={index}
              movie={movie}
              setSelectedMovie={setSelectedMovie}
            />
          ))
        ) : (
          <Placeholder src="/react-movie-app/movie-icon.svg" />
        )}

        </MovieListContainer>
        
     
    </Container>
  );
}

export default App;
