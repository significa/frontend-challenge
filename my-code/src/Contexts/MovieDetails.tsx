import axios from 'axios';
import { createContext, ReactNode, useContext, useState } from 'react';

interface MovieDetailsProviderProps {
    children: ReactNode
}

interface MovieDetailsContextProps {
    getMovieInfo: (imdbID: string) => Promise<void>
    movieInfo: MovieInfoProps
    isLoading: boolean
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

const MovieDetailsContext = createContext<MovieDetailsContextProps>({
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

export function MovieDetailsProvider({ children }: MovieDetailsProviderProps) {

    const [movieInfo, setMovieInfo] = useState<MovieInfoProps>({
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