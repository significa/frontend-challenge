import { useNavigate } from 'react-router-dom';
import { FavoriteIcon, MovieCardContainer, MovieDetails, MovieInfo, MoviePoster } from './styles';
import heartIcon from '/icons/icon-heart-white.svg';

interface MovieCardProps {
    Poster: string
    Title: string
    Year: string
    imdbID: string
}

export function MovieCard({ imdbID, Poster, Title, Year }: MovieCardProps) {

    const navigate = useNavigate()

    function handleClick() {
        navigate(`/movie/${imdbID}`)
    }

    return (
        <MovieCardContainer>
            <MovieDetails>
                <FavoriteIcon>
                    <img src={heartIcon} alt="" />
                </FavoriteIcon>
                <MovieInfo onClick={handleClick}>
                    <h2>{Title}</h2>
                    <p>{Year.length === 5 ? `${Year} OnGoing` : Year}</p>
                </MovieInfo>
            </MovieDetails>
            <MoviePoster src={Poster != 'N/A' ? Poster : 'https://image-placeholder.com/images/actual-size/180x240.png'} alt={Title} />
        </MovieCardContainer>
    );
}