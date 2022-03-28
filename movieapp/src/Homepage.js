import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import './App.css';
import searchBarIcon from './layout/Icons/icon-magnifier-grey.png';
import EmptyState from './layout/Illustrations/illustration-empty-state.png'

import {SearchBox, SearchIcon, SearchInput, EmptySearch, SearchSuggestion, Placeholder, Offer, MovieListContainer, Container, Header, MovieList} from './appStyle';
import MovieDetails from './components/MovieDetails';


const API_KEY="7c62718b"

const Homepage=() =>{
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
          <SearchIcon src={searchBarIcon} />
          <SearchInput
            placeholder="Search Movies..."
            value={searchQuery}
            onChange={handleOnChange}
          />
        </SearchBox>
        </Header>
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
              <EmptySearch>
              <Placeholder src={EmptyState} />
              <SearchSuggestion>
                Don't know what to search?
              </SearchSuggestion>
              <Offer>Here's an offer you can't refuse</Offer>
              </EmptySearch>
            )}
            
          </MovieList>
            
          )}
        

        </MovieListContainer>
        
     
    </Container>
    
  );
}

export default Homepage;
