import { useNavigate } from 'react-router-dom';
import { useMovies } from '../../Contexts/MoviesData';
import { FavouriteIcon, MovieCardContainer, MovieDetails, MovieInfo, MoviePoster } from './styles';
import fullHeartIcon from '/icons/icon-heart-full.svg';
import whiteHeartIcon from '/icons/icon-heart-white.svg';

interface MovieCardType {
    poster: string
    title: string
    year: string
    imdbID: string
}

export function MovieCard({ imdbID, poster, title, year }: MovieCardType) {

    const navigate = useNavigate()
    const { isFavourite, addToFavourites } = useMovies()

    function handleClick() {
        navigate(`/movie/${imdbID}`)
    }

    return (
        <MovieCardContainer>
            <MovieDetails>
                <MovieInfo onClick={handleClick}>
                    <h2>{title}</h2>
                    <p>{year.length === 5 ? `${year} OnGoing` : year}</p>
                </MovieInfo>
            </MovieDetails>
            <FavouriteIcon isFavourite={isFavourite(imdbID)}>
                <img
                    onClick={() => addToFavourites(imdbID)}
                    src={isFavourite(imdbID) ? fullHeartIcon : whiteHeartIcon}
                    alt="Add to favourites"
                />
            </FavouriteIcon>
            <MoviePoster src={poster != 'N/A' ? poster : 'https://image-placeholder.com/images/actual-size/180x240.png'} alt={title} />
        </MovieCardContainer>
    );
}