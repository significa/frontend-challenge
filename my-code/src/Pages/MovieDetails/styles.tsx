import styled from 'styled-components';
import { theme } from '../../GlobalStyles/Theme';

export const MovieDetailsContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 1rem 5rem;
    display: grid;
    grid-template-areas: 
        "movie-info movie-poster";

    @media (max-width: 800px) {
        grid-template-areas:
            "movie-poster"
            "movie-info";
        padding: 1rem 2rem 3rem 2rem;
    }
`;

export const MovieInfoContainer = styled.div`
    grid-area: movie-info;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ArrowIcon = styled.img`
    width: 24px;
    height: 24px;
    filter: brightness(0.5);
    cursor: pointer;
    transition: filter 0.1s ease-in-out;

    &:hover {
        filter: brightness(1);
    }
`;

export const InfoHeader = styled.header`
    display: flex;
    align-items: center;
    margin: 32px 0 24px 0;

`;

export const Runtime = styled.span`
    color: ${theme.font.colors.secondary};
`;

export const Year = styled.span`
        display: flex;
        align-items: center;
        color: ${theme.font.colors.secondary};
        ::before, ::after {
            content: ' ';
            display: inline-block;
            width: 3px;
            height: 3px;
            margin: 0 0.5rem;
            border-radius: 50%;
            background: ${theme.font.colors.secondary};
        }
`;

export const Rated = styled.span`
    background-color: ${theme.colors.lightGrey};
    color: ${theme.colors.dark};
    padding: 0.3rem 0.2rem;
    border-radius: 4px;
`;

export const MovieTitle = styled.h1`
    font-size: ${theme.font.size[88]};


    @media (max-width: 800px) {    
        font-size: ${theme.font.size[24]};
    }
`;

export const RatingsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    margin: 32px 0 48px 0;
`;

export const Rating = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    border: 1px solid ${theme.colors.midGrey};
    border-radius: 4px;
    padding-right: .5rem;
    overflow: hidden;
`;

export const RatingLogo = styled.img`
    background-color: ${theme.colors.red};
    padding: .5rem;
`;

export const AddToFavouritesButton = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    border: 1px solid ${theme.colors.midGrey};
    border-radius: 4px;
    padding: .45rem .5rem;
    transition: all 0.1s ease-in-out;
    cursor: pointer;

    img{
        width: 16px;
        height: 16px;
        filter: brightness(0.6);
    }

    img, p {
        color: ${theme.colors.lightGrey};
    }

    &:hover{
        img,p{

            filter: brightness(1);
            color: ${theme.colors.white};
        }
    }
`;

export const TechnicalInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TechnicalInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TechnicalInfoTitle = styled.p`
    color: ${theme.colors.lightGrey};
    font-weight: ${theme.font.weight.medium};
    margin-bottom: 1rem;
`;

export const MoviePosterContainer = styled.div`
    grid-area: movie-poster;
    position: relative;
    width: 40vw;
    display: grid;
    place-content: center;
    place-items: center;

    @media (max-width: 800px) {    
        margin-bottom: 3rem;
        width: 100%;
    }
`;

export const MoviePoster = styled.img`
    width: 100%;
    max-width: 350px;
    object-fit: cover;
    border-radius: 8px;
`;
