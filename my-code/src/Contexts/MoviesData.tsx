import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";

interface MoviesDataProviderProps {
    children: ReactNode;
}

interface MoviesDataContextProps {
    movies: MovieProps[];
    getMoviesData: (search: string) => Promise<void>;
    isLoading: boolean;
}

export interface MovieProps {
    Actors: string;
    Awards: string;
    Country: string;
    Director: string;
    Genre: string;
    Language: string;
    Metascore: string;
    Plot: string;
    Poster: string;
    Released: string;
    Title: string;
    Year: string;
    imdbRating: string;
    imdbID: string;
}

const MoviesDataContext = createContext({} as MoviesDataContextProps)

export function MoviesDataProvider({ children }: MoviesDataProviderProps) {

    const [movies, setMovies] = useState<MovieProps[]>([])
    const [isLoading, setIsLoading] = useState(false)

    async function getMoviesData(search: string) {
        if (search.length > 0 && search.length < 3) return;

        setIsLoading(true)
        if (search.length === 0) return (
            setMovies([]),
            setIsLoading(false)
        )

        const response = await axios.get(`http://www.omdbapi.com/?apikey=23fc3dfd&s=${search}`)
        if (response.data.Response === 'False') return (
            setMovies([]),
            setIsLoading(false)
        )
        setMovies(response.data.Search)
        setIsLoading(false)
    }

    return (
        <MoviesDataContext.Provider value={{ movies, getMoviesData, isLoading }}>
            {children}
        </MoviesDataContext.Provider>
    )
}

export function useMovies() {
    const context = useContext(MoviesDataContext)
    if (!context) {
        throw new Error("useMovies must be used within a MoviesDataProvider")
    }
    return context
}