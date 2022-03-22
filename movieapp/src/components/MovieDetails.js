import React from 'react';
import {MovieContainer, CoverImage, InfoColumn, MovieInfo, MovieName} from '../styles/movieDetails'

const MovieDetails = (props) => {
    const {Title, Year, imdbID, Type, Poster}=props.movie
  return (
    <MovieContainer
      onClick={() => {
        props.onMovieSelect(imdbID);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
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