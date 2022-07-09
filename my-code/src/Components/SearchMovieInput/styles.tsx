import styled from 'styled-components';
import { theme } from '../../GlobalStyles/Theme';

export const SearchMoviesInputContainer = styled.div`
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    background-color: ${theme.colors.white};
    border-radius: 4px;
    margin-bottom: 32px;
`;

export const SearchIcon = styled.img`
    margin: 0 .5rem 0 1rem;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    padding-left: .5rem;
`;