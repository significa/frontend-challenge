import axios from 'axios';
import { createContext, ReactNode, useContext, useState } from 'react';

interface MovieDetailsProviderProps {
    children: ReactNode
}

interface MovieDetailsContextProps {
    getMovieInfo: (imdbID: string) => Promise<void>
    movieInfo: MovieInfoProps
}

interface MovieInfoProps {
    imdbID: string
    Runtime: string
    Year: string
    Rated: string
    Title: string
    Ratings: [{ Source: string, Value: string }]
    Plot: string
    Actors: string;
    Genre: string;
    Director: string
    Poster: string
}

const MovieDetailsContext = createContext({} as MovieDetailsContextProps)

export function MovieDetailsProvider({ children }: MovieDetailsProviderProps) {

    const [movieInfo, setMovieInfo] = useState({} as MovieInfoProps)

    async function getMovieInfo(imdbID: string) {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=23fc3dfd&i=${imdbID}`)
        setMovieInfo(response.data)
        console.log(response)
    }

    return (
        <MovieDetailsContext.Provider value={{ getMovieInfo, movieInfo }}>
            {children}
        </MovieDetailsContext.Provider>
    );
}

export function useMovieDetails() {
    const context = useContext(MovieDetailsContext)
    if (!context) {
        throw new Error('useMovieDetails must be used within a MovieDetailsProvider')
    }
    return context
}