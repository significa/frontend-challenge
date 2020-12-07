import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    border-radius: ${theme.border.radius};
    overflow: hidden;
    cursor: pointer;

    &:hover ${Info} {
      display: block;
    }
  `}
`

export const ImageBox = styled.div`
  height: 100%;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }

    100% {
      background-position: 40rem 0;
    }
  }
`

export const Info = styled.div`
  ${({ theme }) => css`
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(27, 35, 41, 0.8);

    > a {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      box-sizing: border-box;
      padding: ${theme.spacings.xsmall};
      position: relative;
      height: 100%;
      align-self: flex-end;
      color: ${theme.colors.white};
      text-decoration: none;
    }
  `}

  ${media.greaterThan('medium')`
     display: none;
  `}
`
export const Title = styled.h2`
  ${({ theme }) => css`
    margin: 0;
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Year = styled.span``

export const FavButtton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: absolute;
    right: ${theme.spacings.xsmall};
    top: ${theme.spacings.xsmall};
    cursor: pointer;

    svg {
      width: 2.5rem;
    }
  `}
`
