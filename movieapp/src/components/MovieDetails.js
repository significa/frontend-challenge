import React from 'react';
import {MovieContainer, CoverImage, InfoColumn, MovieInfo, MovieName} from '../styles/movieDetails'
import { useNavigate } from 'react-router';




const MovieDetails = (props) => {
    const {Title, Year, imdbID, Type, Poster}=props.movie
    
    let navigate = useNavigate();
    const handleClick=(props)=>{
      navigate('/movie')
    }
  return (
   
    
    <MovieContainer
     onClick={handleClick}>
      <CoverImage src={Poster} alt={Title} />
      <MovieName>{Title}</MovieName>
      <InfoColumn>
        <MovieInfo>Year : {Year}</MovieInfo>
        <MovieInfo>Type : {Type}</MovieInfo>
      </InfoColumn>
    </MovieContainer>
    
  )
}

export default MovieDetails;