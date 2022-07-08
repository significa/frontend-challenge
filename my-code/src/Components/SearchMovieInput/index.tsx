import { useState } from 'react';
import { SearchIcon, SearchInput, SearchMoviesInputContainer } from './styles';

import magnifierIcon from '/icons/icon-magnifier-grey.svg';

export function SearchMovieInput() {

    const [searchTerm, setSearchTerm] = useState('')

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