import styled from 'styled-components';

export const MoviesListContainer = styled.div`
    width: 95%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    justify-content: center;
    place-items: center;
    gap: 1rem;
    margin: 0 auto;
`;

export const EmptyState = styled.div<{ moviesFound: number }>`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${({ moviesFound }) => moviesFound === 0 && `
        display: flex;
    `}
`;
