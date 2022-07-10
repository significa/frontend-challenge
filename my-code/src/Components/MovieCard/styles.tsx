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

export const FavouriteIcon = styled.div<{ isFavourite: boolean }>`
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.15s ease-in-out;
    cursor: pointer;

    :hover{
        opacity: 1;
    }

    ${({ isFavourite }) => isFavourite && `
        opacity: 1;
    `}
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
    justify-content: flex-end;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    z-index: 1;

    :hover {
        opacity: 1;

        & + ${FavouriteIcon} {
            opacity: 1;
        }
        & + ${FavouriteIcon} + ${MoviePoster} {
            filter: brightness(0.5);
        }
    }
`;

export const MovieInfo = styled.div`
    padding: .5rem;
    cursor: pointer;
`;
