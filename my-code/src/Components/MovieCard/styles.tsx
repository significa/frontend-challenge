import styled from 'styled-components';

export const MovieCardContainer = styled.div`
    width: fit-content;
    height: fit-content;
    position: relative;
`;

export const MoviePoster = styled.img`
    position: relative;
    width: 180px;
    height: 240px;
    border-radius: 3px;

`;

export const MovieDetails = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    z-index: 1;

    :hover {
        opacity: 1;

        & + ${MoviePoster} {
            filter: brightness(0.5);
        }
    }

`;

export const FavoriteIcon = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: .5rem;
    cursor: pointer;
`;

export const MovieInfo = styled.div`
    padding: .5rem;
    cursor: pointer;
`;
