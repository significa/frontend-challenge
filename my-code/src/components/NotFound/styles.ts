import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.xxlarge};

    & img {
      width: 100%;
      height: auto;
      object-fit: cover;
      overflow: hidden;
      border-radius: ${theme.border.radius};

      ${media.greaterThan('medium')`
         max-width: 30rem;
      `}
    }
  `}
`
export const Description = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.lightGrey};
    margin-top: ${theme.spacings.xsmall};
  `}
`

export const Info = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.lightGrey};
    margin-top: ${theme.spacings.xsmall};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`
