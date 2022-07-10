import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface MoviesDataProviderProps {
    children: ReactNode;
}

interface MoviesDataContextProps {
    movies: MovieProps[];
    getMoviesData: (search: string) => Promise<void>;
    favouriteMovies: FavouriteMoviesProps[];
    addToFavourites: (movieID: string) => void;
    isFavourite: (movieID: string) => boolean;
    isLoading: boolean;
}

interface MovieProps {
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

interface FavouriteMoviesProps {
    imdbID: string;
}

const MoviesDataContext = createContext({} as MoviesDataContextProps)

export function MoviesDataProvider({ children }: MoviesDataProviderProps) {

    const [movies, setMovies] = useState<MovieProps[]>([])
    const [favouriteMovies, setFavouriteMovies] = useState<FavouriteMoviesProps[]>(
        JSON.parse(localStorage.getItem('favouriteMovies') || '[]')
    )
    const [isLoading, setIsLoading] = useState(false)

    async function getMoviesData(search: string) {
        if (search.length > 0 && search.length < 3) return;

        setIsLoading(true)
        if (search.length === 0) return (
            setMovies([]),
            setIsLoading(false)
        )

        const response = await axios.get(`https://www.omdbapi.com/?apikey=23fc3dfd&s=${search}`)
        if (response.data.Response === 'False') return (
            setMovies([]),
            setIsLoading(false)
        )
        setMovies(response.data.Search)
        setIsLoading(false)
    }

    function addToFavourites(movieID: string) {
        if (favouriteMovies.some(movie => movie.imdbID === movieID)) {
            return setFavouriteMovies(favouriteMovies.filter(movie => movie.imdbID !== movieID))
        }
        setFavouriteMovies([{ imdbID: movieID }, ...favouriteMovies])
    }


    function isFavourite(movieID: string) {
        return (favouriteMovies.some(movie => movie.imdbID === movieID))
    }

    useEffect(() => {
        localStorage.setItem('favouriteMovies', JSON.stringify(favouriteMovies))
    }, [favouriteMovies])

    return (
        <MoviesDataContext.Provider value={{ movies, getMoviesData, favouriteMovies, isFavourite, addToFavourites, isLoading }}>
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