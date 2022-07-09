import styled from 'styled-components';

export const MoviesListContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 180px);
    justify-content: center;
    gap: 1rem;

    @media (max-width: 768px) {
        gap: .7rem;
    }
`;
