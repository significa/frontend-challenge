import { useMovies } from '../../Contexts/MoviesData';
import { MovieCard } from '../MovieCard';
import { MoviesListContainer } from './styles';

export function MoviesList() {

    const { movies } = useMovies()

    return (
        <MoviesListContainer>
            {movies.map(movie => (
                <MovieCard
                    key={movie.imdbID}
                    Poster={movie.Poster}
                    Title={movie.Title}
                    Year={movie.Year}
                    imdbID={movie.imdbID}
                />
            ))}
        </MoviesListContainer>
    );
}