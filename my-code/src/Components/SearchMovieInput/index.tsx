import { useEffect, useState } from 'react';
import { useMovies } from '../../Contexts/MoviesData';
import { SearchIcon, SearchInput, SearchMoviesInputContainer } from './styles';

import magnifierIcon from '/icons/icon-magnifier-grey.svg';

export function SearchMovieInput() {

    const { getMoviesData } = useMovies()
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        getMoviesData(searchTerm)
    }, [searchTerm])

    return (
        <SearchMoviesInputContainer>
            <SearchIcon src={magnifierIcon} alt="Magnifier icon" />
            <SearchInput
                type="text"
                placeholder="Search for movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </SearchMoviesInputContainer>
    );
}