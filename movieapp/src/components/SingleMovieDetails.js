import React from 'react';
import {MovieImage, SingleMovieContainer, 
  Right, Left, TimeNYear, MovieTitle, Rating, 
  RatingPercent, FavoriteButton, MovieDescription, 
  MovieCast, Cast, CastName, Genre, MoviePlotTitle,
  GenreName, Director, DirectorName, MovieDescriptionSection, 
MovieCastTitle, MovieGenreTitle, MovieDirectorTitle, IMDbRating} from '../styles/singleMovieDetails';
import RatingLogo from '../layout/Logos/logo-rotten-tomatoes.png';

const SingleMovieDetails = (props) => {
    const {movie}=props
    console.log(movie)
  return (
    <SingleMovieContainer>
        <Right>
          <TimeNYear>{movie.Runtime} . {movie.Year}</TimeNYear>
          <MovieTitle>{movie.Title}</MovieTitle>
          <Rating>
            
            {movie.imdbRating}/10
            </Rating>
          <RatingPercent>
          <IMDbRating src={RatingLogo}/>
          50%
          </RatingPercent>
          <FavoriteButton>Add to favorites</FavoriteButton>
          <MovieDescriptionSection>
            <MoviePlotTitle>Plot</MoviePlotTitle>
          <MovieDescription>{movie.Plot}</MovieDescription>
          </MovieDescriptionSection>
          
          <MovieCast>
            <Cast>
              <MovieCastTitle>Cast</MovieCastTitle>
              <CastName>{movie.Actors}</CastName>
            </Cast>
            <Genre>
            <MovieGenreTitle>Genre</MovieGenreTitle>
              <GenreName>{movie.Genre}</GenreName>
            </Genre>
            <Director>
            <MovieDirectorTitle>Director</MovieDirectorTitle>
              <DirectorName>{movie.Director}</DirectorName>
            </Director>
            
          </MovieCast>
        </Right>
        <Left>
            <MovieImage src={movie.Poster}/>
           
        </Left>
        
    </SingleMovieContainer>
  )
}

export default SingleMovieDetails