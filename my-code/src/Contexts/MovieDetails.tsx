import axios from 'axios';
import { createContext, ReactNode, useContext, useState } from 'react';

interface MovieDetailsProviderType {
    children: ReactNode
}

interface MovieDetailsContextType {
    getMovieInfo: (imdbID: string) => Promise<void>
    movieInfo: MovieInfoType
    isLoading: boolean
}

interface MovieInfoType {
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

const MovieDetailsContext = createContext<MovieDetailsContextType>({
    getMovieInfo: async () => {
        return;
    },
    movieInfo: {
        imdbID: '',
        Runtime: '',
        Year: '',
        Rated: '',
        Title: '',
        Ratings: [{ Source: '', Value: '' }],
        Plot: '',
        Actors: '',
        Genre: '',
        Director: '',
        Poster: ''
    },
    isLoading: false,
})

export function MovieDetailsProvider({ children }: MovieDetailsProviderType) {

    const [movieInfo, setMovieInfo] = useState<MovieInfoType>({
        imdbID: '',
        Runtime: '',
        Year: '',
        Rated: '',
        Title: '',
        Ratings: [{ Source: '', Value: '' }],
        Plot: '',
        Actors: '',
        Genre: '',
        Director: '',
        Poster: ''
    })
    const [isLoading, setIsLoading] = useState(false)

    async function getMovieInfo(imdbID: string) {
        setIsLoading(true)
        const response = await axios.get(`https://www.omdbapi.com/?apikey=23fc3dfd&i=${imdbID}`)
        setMovieInfo(response.data)
        setIsLoading(false)
    }

    return (
        <MovieDetailsContext.Provider value={{ getMovieInfo, movieInfo, isLoading }}>
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