import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import './App.css';

import {SearchBox, SearchIcon, SearchInput, Placeholder, MovieListContainer, Container, Header, MovieList} from './appStyle';
import MovieDetails from './components/MovieDetails';
import MovieInfo from './components/MovieInfo';

const API_KEY="7c62718b"

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [timeoutId, setTimeoutId] = useState()

  useEffect(() => {
    const fetchData= async (searchString)=>{
      setIsError(false)
      setIsLoading(true);
      try {
        const response= await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);
        setMovies(response.data.Search)
      } catch (error) {
        setIsError(true)
      }
      
      setIsLoading(false)
    }
    fetchData(searchQuery);
    
  }, [searchQuery]);
  
  const handleOnChange = (e) => {
    setSelectedMovie("")
    clearTimeout(timeoutId);
    setSearchQuery(e.target.value);
    
  };  
 
  
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
        {selectedMovie && <MovieInfo selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}/>}
        <MovieListContainer>
          {isError && <div>Something went wrong....</div>}
          {isLoading ? ( 
            <div>Loading...</div>
          ): (
          <MovieList>
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
            
          </MovieList>
            
          )}
        

        </MovieListContainer>
        
     
    </Container>
  );
}

export default App;
