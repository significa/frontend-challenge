import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useMovies } from '../../Contexts/MoviesData';
import { theme } from '../../GlobalStyles/Theme';
import { MovieCard } from '../MovieCard';
import { EmptyState, MoviesListContainer } from './styles';

import emptyState from '/illustrations/illustration-empty-state.png';

export function MoviesList() {

    const { movies, isLoading } = useMovies()

    return (
        <MoviesListContainer>
            {isLoading ? (
                <>
                    <Skeleton width={180} height={240} baseColor={theme.colors.midGrey} highlightColor={theme.colors.dark} />
                    <Skeleton width={180} height={240} baseColor={theme.colors.midGrey} highlightColor={theme.colors.dark} />
                    <Skeleton width={180} height={240} baseColor={theme.colors.midGrey} highlightColor={theme.colors.dark} />
                </>
            ) : (
                movies.length > 0 ? (
                    movies.map(movie => (
                        <MovieCard
                            key={movie.imdbID}
                            Poster={movie.Poster}
                            Title={movie.Title}
                            Year={movie.Year}
                            imdbID={movie.imdbID}
                        />
                    ))
                ) : (
                    <EmptyState moviesFound={movies.length}>
                        <img src={emptyState} alt="No movies found..." />
                        <big><b>Don’t know what to search?</b></big>
                        <small>Here’s an offer you can’t refuse</small>
                    </EmptyState>
                )
            )}
        </MoviesListContainer>
    )
}