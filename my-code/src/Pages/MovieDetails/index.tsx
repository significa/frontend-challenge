import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useMovieDetails } from '../../Contexts/MovieDetails';
import { useMovies } from '../../Contexts/MoviesData';
import { theme } from '../../GlobalStyles/Theme';
import { AddToFavouritesButton, ArrowIcon, InfoHeader, MovieDetailsContainer, MovieInfoContainer, MoviePoster, MoviePosterContainer, MovieTitle, Rated, Rating, RatingLogo, RatingsContainer, Runtime, TechnicalInfo, TechnicalInfoContainer, TechnicalInfoTitle, Year } from './styles';
import arrowIcon from '/icons/icon-arrow-white.svg';
import heartIcon from '/icons/icon-heart-white.svg';
import imdbLogo from '/logos/logo-imdb.svg';
import rottenTomatoesLogo from '/logos/logo-rotten-tomatoes.svg';

export function MovieDetails() {

    const { isFavourite, addToFavourites } = useMovies()
    const { movieInfo, getMovieInfo, isLoading } = useMovieDetails()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
       getMovieInfo(id!)
    }, [id])
    
    if (isLoading) {
        return (
            <MovieDetailsContainer>
            <Skeleton
                width={"85vw"}
                height={"95vh"}
                baseColor={theme.colors.midGrey}
                highlightColor={theme.colors.dark}
            />
            </MovieDetailsContainer>
        );
    }

    return (
        <MovieDetailsContainer>
            <MovieInfoContainer>
                <ArrowIcon
                    src={arrowIcon}
                    alt="Back"
                    onClick={() => navigate('/')}
                />
                <InfoHeader>
                    <Runtime>{movieInfo.Runtime}</Runtime>
                    <Year>{movieInfo.Year}</Year>
                    <Rated>{movieInfo.Rated}</Rated>
                </InfoHeader>
                <MovieTitle>{movieInfo.Title}</MovieTitle>
                <RatingsContainer>
                    {movieInfo.Ratings.slice(0, 2).map((rating, index) => (
                        <Rating key={index}>
                            <RatingLogo src={rating.Source === 'Internet Movie Database' ? imdbLogo : rottenTomatoesLogo} alt={rating.Source} />
                            <p>{rating.Value}</p>
                        </Rating>
                    ))}
                    <AddToFavouritesButton
                        isFavourite={isFavourite(movieInfo.imdbID)}
                        onClick={() => (addToFavourites(movieInfo.imdbID))}
                    >
                        <img src={heartIcon} alt="Add to favourites" />
                        <p>{isFavourite(movieInfo.imdbID) ? 'Added' : 'Add to favourites'}</p>
                    </AddToFavouritesButton>
                </RatingsContainer>
                <TechnicalInfoContainer>
                    <TechnicalInfo>
                        <TechnicalInfoTitle>Cast</TechnicalInfoTitle>
                        {movieInfo.Actors.split(',').map((actor, index) => (
                            <p key={index}>{actor}</p>
                        ))}
                    </TechnicalInfo>
                    <TechnicalInfo>
                        <TechnicalInfoTitle>Genre</TechnicalInfoTitle>
                        {movieInfo.Genre.split(',').map((genre, index) => (
                            <p key={index}>{genre}</p>
                        ))}
                    </TechnicalInfo>
                    <TechnicalInfo>
                        <TechnicalInfoTitle>Director</TechnicalInfoTitle>
                        {movieInfo.Director.split(',').map((director, index) => (
                            <p key={index}>{director}</p>
                        ))}
                    </TechnicalInfo>
                </TechnicalInfoContainer>
            </MovieInfoContainer>
            <MoviePosterContainer>
                <MoviePoster src={movieInfo.Poster} alt={movieInfo.Poster} />
            </MoviePosterContainer>
        </MovieDetailsContainer>
    );
}