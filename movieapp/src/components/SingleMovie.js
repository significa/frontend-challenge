import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';

import {Container, MovieDetailContainer} from "../styles/singleMovie"
import SingleMovieDetails from './SingleMovieDetails';


const API_KEY="7c62718b"

const SingleMovie = () => {
  const location = useLocation();
  const {imdbID} =location.state.movie
  

 
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
 

  useEffect(() => {
    const fetchData= async (imdbID)=>{
      setIsError(false)
      setIsLoading(true);
      try {
        const response= await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
        setMovie(response.data)
      } catch (error) {
        setIsError(true)
      }
      
      setIsLoading(false)
    }
    fetchData(imdbID);
    
  }, [imdbID]);
  console.log(movie)


  
  return (
    
            <Container>
             {isError && <div>Something went wrong....</div>}
             {isLoading ? (
               <div>Loading....</div>
             ):(
               <MovieDetailContainer>
                 
                    <SingleMovieDetails
                    movie={movie}
                    />
               </MovieDetailContainer> 
              
             )}
             </Container>
    
  );
  
  
}

export default SingleMovie