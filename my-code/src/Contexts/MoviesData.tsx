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

const MoviesDataContext = createContext<MoviesDataContextProps>({
    movies: [{
        Actors: '',
        Awards: '',
        Country: '',
        Director: '',
        Genre: '',
        Language: '',
        Metascore: '',
        Plot: '',
        Poster: '',
        Released: '',
        Title: '',
        Year: '',
        imdbRating: '',
        imdbID: '',
    }],
    getMoviesData: async () => {
        return;
    },
    favouriteMovies: [{
        imdbID: '',
    }],
    addToFavourites: () => {
        return;
    },
    isFavourite: () => {
        return ( false );
    },
    isLoading: false
})

export function MoviesDataProvider({ children }: MoviesDataProviderProps) {

    const [movies, setMovies] = useState<MovieProps[]>([])
    const [favouriteMovies, setFavouriteMovies] = useState<FavouriteMoviesProps[]>(
        JSON.parse(localStorage.getItem('favouriteMovies') || '[]')
    )
    const [isLoading, setIsLoading] = useState(false)

    async function getMoviesData(search: string) {
        setIsLoading(true)
        if (search.length === 0) {
            setMovies([]),
            setIsLoading(false)
            return
        }

        try{
            const response = await axios.get(`https://www.omdbapi.com/?apikey=23fc3dfd&s=${search}`)
            setMovies(response.data.Search)
            setIsLoading(false)
        } catch(e) {
            setMovies([]),
            setIsLoading(false)
        }
    }

    function addToFavourites(movieID: string) {
        if (isFavourite(movieID)) {
            setFavouriteMovies(favouriteMovies.filter(movie => movie.imdbID !== movieID))
            localStorage.setItem('favouriteMovies', JSON.stringify(favouriteMovies)) // If already in favourites, remove it
            return 
        }
        setFavouriteMovies([{ imdbID: movieID }, ...favouriteMovies])
        localStorage.setItem('favouriteMovies', JSON.stringify(favouriteMovies)) // If not in favourites, add it
    }

    function isFavourite(movieID: string) {
        return (favouriteMovies.some(movie => movie.imdbID === movieID))
    }

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