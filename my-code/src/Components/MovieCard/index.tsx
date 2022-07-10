import { useNavigate } from 'react-router-dom';
import { useMovieDetails } from '../../Contexts/MovieDetails';
import { useMovies } from '../../Contexts/MoviesData';
import { FavouriteIcon, MovieCardContainer, MovieDetails, MovieInfo, MoviePoster } from './styles';
import fullHeartIcon from '/icons/icon-heart-full.svg';
import whiteHeartIcon from '/icons/icon-heart-white.svg';

interface MovieCardProps {
    Poster: string
    Title: string
    Year: string
    imdbID: string
}

export function MovieCard({ imdbID, Poster, Title, Year }: MovieCardProps) {

    const navigate = useNavigate()
    const { isFavourite, addToFavourites } = useMovies()
    const { getMovieInfo } = useMovieDetails()

    function handleClick() {
        navigate(`/movie/${imdbID}`)
        getMovieInfo(imdbID)
    }

    return (
        <MovieCardContainer>
            <MovieDetails>
                <MovieInfo onClick={handleClick}>
                    <h2>{Title}</h2>
                    <p>{Year.length === 5 ? `${Year} OnGoing` : Year}</p>
                </MovieInfo>
            </MovieDetails>
            <FavouriteIcon isFavourite={isFavourite(imdbID)}>
                <img
                    onClick={() => addToFavourites(imdbID)}
                    src={isFavourite(imdbID) ? fullHeartIcon : whiteHeartIcon}
                    alt="Add to favourites"
                />
            </FavouriteIcon>
            <MoviePoster src={Poster != 'N/A' ? Poster : 'https://image-placeholder.com/images/actual-size/180x240.png'} alt={Title} />
        </MovieCardContainer>
    );
}