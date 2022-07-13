import styled from 'styled-components';

export const MoviesListContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(11.25rem, 1fr));
    justify-content: center;
    place-items: center;
    gap: 1rem;
    margin: 0 auto;
`;

export const EmptyState = styled.div<{ moviesFound: number }>`
    margin-top: 20%;
    transform: translateY(-50%);
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    ${({ moviesFound }) => moviesFound === 0 && `
        display: flex;
    `}

    img{
        width: 30%;
    }


    @media (max-width: 800px) {        
        margin-top: 100%;

        img{
            width: 100%;
        }
    }

`;
